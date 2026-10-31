import {createClient} from '@supabase/supabase-js';
import {sampleQuestions,practiceQuestions} from './questions';
const url=import.meta.env.VITE_SUPABASE_URL, key=import.meta.env.VITE_SUPABASE_ANON_KEY;
export const isCloud=Boolean(url&&key);
export const supabase=isCloud?createClient(url,key):null;
const STORAGE='study-quiz-results-v1';
export async function loadQuestions() {
  return [...sampleQuestions, ...practiceQuestions];
}
export async function loadResults(){if(!supabase)return JSON.parse(localStorage.getItem(STORAGE)||'[]');const {data,error}=await supabase.from('results').select('*').order('created_at',{ascending:false}).limit(500);if(error)throw error;return data||[];}
export async function saveResult(result){if(!supabase){const all=JSON.parse(localStorage.getItem(STORAGE)||'[]');all.unshift(result);localStorage.setItem(STORAGE,JSON.stringify(all));return;}const {error}=await supabase.from('results').insert({name:result.name,subject:result.subject,weeks:result.weeks,question_ids:result.question_ids,correct:result.correct,total:result.total,elapsed_seconds:result.elapsed_seconds,score:result.score,mode:result.mode});if(error)throw error;}
