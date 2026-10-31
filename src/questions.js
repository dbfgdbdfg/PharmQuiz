// 샘플 문제입니다. 실제 스터디 문제로 교체하거나 Supabase에 추가하세요.
export const subjects = [{id:'pk',name:'약동학',en:'Pharmacokinetics',icon:'💊',tone:'blue'},{id:'im',name:'면역학',en:'Immunology',icon:'🧬',tone:'purple'},{id:'pg',name:'생약학',en:'Pharmacognosy',icon:'🌿',tone:'green'}];
export const weeks = [{id:1,label:'1–2주차'},{id:2,label:'3–4주차'},{id:3,label:'5–6주차'},{id:4,label:'7–8주차'}];
export const sampleQuestions = [
{id:'pk1',subject:'pk',week:1,question:'약물의 혈장 농도가 1차 소실 속도를 따를 때, 반감기에 대한 설명으로 옳은 것은?',options:['초기 농도가 증가하면 반감기가 증가한다','반감기는 소실 속도상수에 반비례한다','반감기는 투여 용량에 정비례한다','반감기는 항상 분포용적과 무관하다'],answer:1,explanation:'1차 소실에서 반감기 t½ = 0.693/k입니다.'},
{id:'pk2',subject:'pk',week:1,question:'정맥 주사 후 생체이용률(F)은 일반적으로 얼마인가?',options:['0','0.25','0.5','1'],answer:3,explanation:'정맥 주사는 전신순환에 직접 투여되므로 F=1입니다.'},
{id:'pk3',subject:'pk',week:2,question:'선형 약동학에서 전신 청소율(CL)의 정의로 옳은 것은?',options:['단위 시간당 약물이 완전히 제거된 것으로 간주되는 혈장 부피','약물의 총 투여량','혈장 내 최고 농도','약물의 단백결합률'],answer:0,explanation:'CL은 단위 시간당 약물이 제거된 것으로 간주되는 혈장 또는 혈액 부피입니다.'},
{id:'pk4',subject:'pk',week:3,question:'정상상태에서 일정 속도로 정맥 주입할 때 주입 속도를 두 배로 하면, 선형 약동학에서 평균 정상상태 농도는?',options:['변하지 않는다','절반이 된다','두 배가 된다','네 배가 된다'],answer:2,explanation:'Css = 주입 속도/CL이므로 CL이 일정하면 Css도 두 배가 됩니다.'},
{id:'pk5',subject:'pk',week:4,question:'1차 소실에서 AUC와 정맥 투여량(Dose)의 관계는?',options:['AUC = CL/Dose','AUC = Dose/CL','AUC = Dose × CL²','AUC는 Dose와 무관하다'],answer:1,explanation:'선형 약동학에서 정맥 투여 후 AUC = Dose/CL입니다.'},
{id:'im1',subject:'im',week:1,question:'다음 중 선천면역의 패턴인식수용체(PRR)에 해당하는 것은?',options:['BCR','TCR','TLR','분비형 IgG'],answer:2,explanation:'TLR은 병원체 관련 분자 패턴을 인식하는 대표적인 PRR입니다.'},
{id:'im2',subject:'im',week:1,question:'B세포 수용체(BCR)에 대한 설명으로 옳은 것은?',options:['항상 분비형으로만 존재한다','항원을 인식하는 막결합 면역글로불린을 포함한다','T세포에서만 발현된다','항원 인식에 MHC가 항상 필요하다'],answer:1,explanation:'BCR은 B세포 표면의 막결합 면역글로불린과 신호전달 단백질로 구성됩니다.'},
{id:'im3',subject:'im',week:2,question:'V(D)J 재조합 개시에 직접 관여하는 효소 복합체는?',options:['RAG1/2','AID','DNA polymerase α','RNA polymerase II'],answer:0,explanation:'RAG1/2가 재조합 신호서열을 인식하고 DNA 절단을 시작합니다.'},
{id:'im4',subject:'im',week:3,question:'NK 세포가 항체가 결합한 표적을 인식하여 세포독성을 유도할 때 중요한 수용체는?',options:['CD3','CD16 (FcγRIII)','CD28','CD40'],answer:1,explanation:'NK 세포의 CD16은 항체 Fc 부위를 인식하여 ADCC를 매개합니다.'},
{id:'im5',subject:'im',week:4,question:'항체의 체세포 과변이(SHM)에 중요한 효소는?',options:['RAG2','TdT','AID','Caspase-3'],answer:2,explanation:'AID는 SHM 및 class-switch recombination에 관여합니다.'},
{id:'pg1',subject:'pg',week:1,question:'다음 중 콩과(Fabaceae)에 속하는 생약은?',options:['감초','길경','황금','인삼'],answer:0,explanation:'감초는 콩과 식물에서 유래합니다.'},
{id:'pg2',subject:'pg',week:1,question:'인삼의 주요 사포닌 성분을 통칭하는 명칭은?',options:['알칼로이드','진세노사이드','탄닌','쿠마린'],answer:1,explanation:'인삼의 대표적인 사포닌 성분은 진세노사이드(ginsenosides)입니다.'},
{id:'pg3',subject:'pg',week:2,question:'황금의 기원식물은 주로 어느 과에 속하는가?',options:['콩과','미나리과','꿀풀과','두릅나무과'],answer:2,explanation:'황금(Scutellaria baicalensis)은 꿀풀과(Lamiaceae)입니다.'},
{id:'pg4',subject:'pg',week:3,question:'플라보노이드의 기본 탄소 골격은?',options:['C6–C3–C6','C6–C2–C6','C5–C5','C6–C1'],answer:0,explanation:'플라보노이드는 일반적으로 C6–C3–C6 골격을 갖습니다.'},
{id:'pg5',subject:'pg',week:4,question:'다음 중 가수분해성 탄닌과 관련 있는 것은?',options:['트로판 알칼로이드','갈산 유도체','카로티노이드','스테로이드 알칼로이드'],answer:1,explanation:'가수분해성 탄닌에는 갈로탄닌과 엘라지탄닌 등이 있습니다.'}
].map(q=>({...q,mode:'rank'}));

// 연습 전용 문제: 랭킹 문제와 ID 및 내용이 완전히 분리되어 있습니다.
export const practiceQuestions = [
{id:'p-pk1',subject:'pk',week:1,question:'1차 소실 약물에서 소실 속도상수 k의 단위는?',options:['시간','시간⁻¹','농도','부피/시간'],answer:1,explanation:'1차 소실 속도상수 k는 시간의 역수 단위(h⁻¹ 등)를 사용합니다.'},
{id:'p-pk2',subject:'pk',week:2,question:'분포용적(Vd)이 의미하는 것은?',options:['약물이 실제 차지하는 해부학적 부피','체내 약물량을 혈장 농도로 나눈 겉보기 부피','혈장 단백질의 부피','단위 시간당 소실되는 약물량'],answer:1,explanation:'Vd는 체내 약물량/혈장 농도로 정의되는 겉보기 분포용적입니다.'},
{id:'p-pk3',subject:'pk',week:3,question:'정상상태 도달 시간에 주로 영향을 주는 것은?',options:['반감기','약물의 색','정제의 모양','주사기의 크기'],answer:0,explanation:'선형 1차 소실 조건에서 정상상태에 가까워지는 시간은 주로 소실 반감기에 의해 결정됩니다.'},
{id:'p-pk4',subject:'pk',week:4,question:'경구 투여의 절대 생체이용률을 구할 때 비교 기준은?',options:['근육주사','정맥주사','피하주사','경피투여'],answer:1,explanation:'절대 생체이용률은 용량 보정한 경구 AUC와 정맥투여 AUC를 비교합니다.'},
{id:'p-im1',subject:'im',week:1,question:'항체에서 항원 결합 부위가 주로 위치하는 영역은?',options:['가변 영역','불변 영역만','Fc 영역만','힌지 영역만'],answer:0,explanation:'항체의 가변 영역에 위치한 CDR들이 항원 결합에 핵심적으로 관여합니다.'},
{id:'p-im2',subject:'im',week:2,question:'V(D)J 재조합에서 접합부에 비주형 N 뉴클레오타이드를 추가하는 효소는?',options:['AID','TdT','C3 convertase','Perforin'],answer:1,explanation:'TdT는 V(D)J 접합부에 비주형 N 뉴클레오타이드를 첨가합니다.'},
{id:'p-im3',subject:'im',week:3,question:'TLR3가 주로 인식하는 핵산은?',options:['이중가닥 RNA','단일가닥 DNA만','콜레스테롤','항체 Fc'],answer:0,explanation:'TLR3는 이중가닥 RNA(dsRNA)를 인식하는 선천면역 수용체입니다.'},
{id:'p-im4',subject:'im',week:4,question:'항체의 class-switch recombination에서 중요한 효소는?',options:['RAG1','AID','DNA ligase만','Lysozyme'],answer:1,explanation:'AID는 면역글로불린 동형전환(CSR)에 필요한 효소입니다.'},
{id:'p-pg1',subject:'pg',week:1,question:'길경의 기원식물이 속하는 과는?',options:['초롱꽃과','콩과','꿀풀과','두릅나무과'],answer:0,explanation:'길경(Platycodon grandiflorus)은 초롱꽃과(Campanulaceae)에 속합니다.'},
{id:'p-pg2',subject:'pg',week:2,question:'감초의 대표적인 감미성 사포닌 성분은?',options:['Glycyrrhizin','Caffeine','Menthol','Atropine'],answer:0,explanation:'감초의 대표적 감미 성분은 glycyrrhizin입니다.'},
{id:'p-pg3',subject:'pg',week:3,question:'플라보노이드의 생합성에는 일반적으로 어떤 경로들이 기여하는가?',options:['시킴산 경로와 아세트산-말론산 경로','요소 회로만','해당과정만','요산 합성 경로만'],answer:0,explanation:'플라보노이드의 방향족 부분은 페닐프로파노이드(시킴산 유래) 및 아세트산-말론산 경로가 함께 기여합니다.'},
{id:'p-pg4',subject:'pg',week:4,question:'축합형 탄닌은 주로 어떤 단위가 중합된 것인가?',options:['플라반-3-올','아미노산','지방산','뉴클레오타이드'],answer:0,explanation:'축합형 탄닌(프로안토시아니딘)은 주로 플라반-3-올 단위가 중합된 물질입니다.'}
].map(q=>({...q,mode:'practice'}));
