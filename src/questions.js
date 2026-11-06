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

// // 연습 전용 문제: 랭킹 문제와 ID 및 내용이 완전히 분리되어 있습니다.
// export const practiceQuestions = [
// {id:'p-pk1',subject:'pk',week:1,question:'1차 소실 약물에서 소실 속도상수 k의 단위는?',options:['시간','시간⁻¹','농도','부피/시간'],answer:1,explanation:'1차 소실 속도상수 k는 시간의 역수 단위(h⁻¹ 등)를 사용합니다.'},
// {id:'p-pk2',subject:'pk',week:2,question:'분포용적(Vd)이 의미하는 것은?',options:['약물이 실제 차지하는 해부학적 부피','체내 약물량을 혈장 농도로 나눈 겉보기 부피','혈장 단백질의 부피','단위 시간당 소실되는 약물량'],answer:1,explanation:'Vd는 체내 약물량/혈장 농도로 정의되는 겉보기 분포용적입니다.'},
// {id:'p-pk3',subject:'pk',week:3,question:'정상상태 도달 시간에 주로 영향을 주는 것은?',options:['반감기','약물의 색','정제의 모양','주사기의 크기'],answer:0,explanation:'선형 1차 소실 조건에서 정상상태에 가까워지는 시간은 주로 소실 반감기에 의해 결정됩니다.'},
// {id:'p-pk4',subject:'pk',week:4,question:'경구 투여의 절대 생체이용률을 구할 때 비교 기준은?',options:['근육주사','정맥주사','피하주사','경피투여'],answer:1,explanation:'절대 생체이용률은 용량 보정한 경구 AUC와 정맥투여 AUC를 비교합니다.'},
// {id:'p-im1',subject:'im',week:1,question:'항체에서 항원 결합 부위가 주로 위치하는 영역은?',options:['가변 영역','불변 영역만','Fc 영역만','힌지 영역만'],answer:0,explanation:'항체의 가변 영역에 위치한 CDR들이 항원 결합에 핵심적으로 관여합니다.'},
// {id:'p-im2',subject:'im',week:2,question:'V(D)J 재조합에서 접합부에 비주형 N 뉴클레오타이드를 추가하는 효소는?',options:['AID','TdT','C3 convertase','Perforin'],answer:1,explanation:'TdT는 V(D)J 접합부에 비주형 N 뉴클레오타이드를 첨가합니다.'},
// {id:'p-im3',subject:'im',week:3,question:'TLR3가 주로 인식하는 핵산은?',options:['이중가닥 RNA','단일가닥 DNA만','콜레스테롤','항체 Fc'],answer:0,explanation:'TLR3는 이중가닥 RNA(dsRNA)를 인식하는 선천면역 수용체입니다.'},
// {id:'p-im4',subject:'im',week:4,question:'항체의 class-switch recombination에서 중요한 효소는?',options:['RAG1','AID','DNA ligase만','Lysozyme'],answer:1,explanation:'AID는 면역글로불린 동형전환(CSR)에 필요한 효소입니다.'},
// {id:'p-pg1',subject:'pg',week:1,question:'길경의 기원식물이 속하는 과는?',options:['초롱꽃과','콩과','꿀풀과','두릅나무과'],answer:0,explanation:'길경(Platycodon grandiflorus)은 초롱꽃과(Campanulaceae)에 속합니다.'},
// {id:'p-pg2',subject:'pg',week:2,question:'감초의 대표적인 감미성 사포닌 성분은?',options:['Glycyrrhizin','Caffeine','Menthol','Atropine'],answer:0,explanation:'감초의 대표적 감미 성분은 glycyrrhizin입니다.'},
// {id:'p-pg3',subject:'pg',week:3,question:'플라보노이드의 생합성에는 일반적으로 어떤 경로들이 기여하는가?',options:['시킴산 경로와 아세트산-말론산 경로','요소 회로만','해당과정만','요산 합성 경로만'],answer:0,explanation:'플라보노이드의 방향족 부분은 페닐프로파노이드(시킴산 유래) 및 아세트산-말론산 경로가 함께 기여합니다.'},
// {id:'p-pg4',subject:'pg',week:4,question:'축합형 탄닌은 주로 어떤 단위가 중합된 것인가?',options:['플라반-3-올','아미노산','지방산','뉴클레오타이드'],answer:0,explanation:'축합형 탄닌(프로안토시아니딘)은 주로 플라반-3-올 단위가 중합된 물질입니다.'}
// ].map(q=>({...q,mode:'practice'}));


export const practiceQuestions = [
 {
    id: 'p-pg1',
    subject: 'pg',
    week: 1,
    question: "다음 생약의 기원식물과 과명에 대한 설명 중 옳지 않은 것은?",
    options: [
      "당삼의 기원식물 중 하나는 Codonopsis pilosula이며, 초롱꽃과(Campanulaceae)에 속한다.",
      "독활의 기원식물은 Aralia continentalis이며, 두릅나무과(Araliaceae)에 속한다.",
      "방풍의 기원식물은 Saposhnikovia divaricata이며, 미나리과(Umbelliferae)에 속한다.",
      "백두옹의 기원식물은 Pulsatilla koreana이며, 박주가리과(Asclepiadaceae)에 속한다.",
      "목향의 기원식물은 Aucklandia lappa이며, 국화과(Compositae)에 속한다."
    ],
    answer: 3,
    explanation: "백두옹은 미나리아재비과(Ranunculaceae)임. 박주가리과는 백미에 해당함."
  },
  {
    id: 'p-pg2',
    subject: 'pg',
    week: 1,
    question: "다음 생약과 주요 성분 및 약리작용의 연결 중 옳지 않은 것은?",
    options: [
      "데리스근 — rotenone — 미토콘드리아 호흡 억제에 의한 살충작용",
      "독활 — kaurenoic acid — 진통·항염증작용",
      "백미 — pregnane glycoside — acetylcholinesterase 억제를 통한 기억력 개선작용",
      "원지 — onjisaponin — nerve growth factor 분비 촉진",
      "세네가 — senegin — 강력한 심장독성에 의한 심정지 유발"
    ],
    answer: 4,
    explanation: "세네가의 senegin은 triterpenoidal saponin이며 진해·거담 등의 작용과 연결됨. 강력한 심장독성은 백두옹의 anemonin 관련 설명임."
  },
  {
    id: 'p-pg3',
    subject: 'pg',
    week: 1,
    question: "부자·오두·초오에 대한 설명 중 옳지 않은 것은?",
    options: [
      "부자는 Aconitum carmichaeli의 자근을 사용한다.",
      "오두(천오)는 Aconitum carmichaeli의 모근의 덩이뿌리를 사용한다.",
      "초오는 Aconitum kusnezoffii, A. ciliare 등의 덩이뿌리를 기원으로 한다.",
      "부자의 aconitine은 법제 과정에서 benzoylaconine 및 aconine 등으로 분해되어 독성이 감소한다.",
      "부자의 higenamine은 강심성분이므로, 부자는 법제하지 않고 가열하여 복용하는 것이 안전하다."
    ],
    answer: 4,
    explanation: "부자는 독성이 매우 강하고 치료지수가 낮아 반드시 법제하여 사용하도록 정리되어 있음. Higenamine의 강심작용이 독성 관리 필요성을 없애지는 않음."
  },
  {
    id: 'p-pg4',
    subject: 'pg',
    week: 1,
    question: "다음 중 미나리과(Umbelliferae)에 속하면서 대표 성분이 saikosaponin인 생약은?",
    options: [
      "백지",
      "방풍",
      "시호",
      "독활",
      "용담"
    ],
    answer: 2,
    explanation: "시호(Bupleurum falcatum)는 미나리과이지만 대표 성분이 oleanane계 triterpenoidal saponin인 saikosaponin임. PDF의 파란 필기에서 예외로 강조한 부분임."
  },
  {
    id: 'p-pg5',
    subject: 'pg',
    week: 1,
    question: "다음 중 생약과 기원식물 학명의 연결이 옳은 것만 모두 고른 것은?\nㄱ. 오약 — Lindera strychnifolia\nㄴ. 원지 — Polygala tenuifolia\nㄷ. 우슬 — Achyranthes japonica\nㄹ. 인도사목 — Rauwolfia serpentina\nㅁ. 한속단 — Dipsacus asperoides",
    options: [
      "ㄱ, ㄴ, ㄷ",
      "ㄱ, ㄷ, ㄹ",
      "ㄴ, ㄷ, ㅁ",
      "ㄱ, ㄴ, ㄷ, ㄹ",
      "ㄱ, ㄴ, ㄷ, ㄹ, ㅁ"
    ],
    answer: 3,
    explanation: "한속단은 Phlomis umbrosa(꿀풀과)이며, Dipsacus asperoides는 속단의 기원식물임."
  },
  {
    id: 'p-pg6',
    subject: 'pg',
    week: 1,
    question: "다음 설명 중 옳지 않은 것은?",
    options: [
      "세신은 쥐방울덩굴과(Aristolochiaceae)에 속하며 aristocholic acid의 신장독성 및 발암성에 주의해야 한다.",
      "속단의 asperosaponin VI는 oleanane계 triterpene saponin이다.",
      "한속단은 꿀풀과(Labiatae)에 속하며 verbascoside와 같은 phenylethanoid 성분을 함유한다.",
      "울금은 생강과(Zingiberaceae)에 속하며 curcumin은 diarylheptanoid 성분이다.",
      "시호는 미나리과에 속하며 coumarin이 주요 지표성분으로 0.3% 이상 함유되어야 한다."
    ],
    answer: 4,
    explanation: "자료에서는 시호의 saikosaponin a를 대표 성분으로 제시하며 0.3% 이상 함유로 정리하고, coumarin은 갖지 않는다고 표시함."
  },
  {
    id: 'p-pg7',
    subject: 'pg',
    week: 1,
    question: "용담·겐티아나근·진교에 대한 설명 중 옳지 않은 것은?",
    options: [
      "용담의 기원식물에는 Gentiana scabra, G. triflora, G. manshurica가 포함된다.",
      "겐티아나근은 Gentiana lutea를 기원으로 하며 고미건위약으로 사용된다.",
      "진교는 Gentiana macrophylla 등을 기원으로 하며 gentianine 등의 alkaloid 성분이 기록되어 있다.",
      "용담, 겐티아나근, 진교는 모두 용담과(Gentianaceae)에 속한다.",
      "진교의 대표 성분은 rotenone이며, 미토콘드리아 호흡을 억제하여 살충작용을 나타낸다."
    ],
    answer: 4,
    explanation: "Rotenone은 데리스근의 성분임. 진교에는 gentiopicroside, sweroside, gentianine 등이 정리되어 있음."
  },
  {
    id: 'p-pg8',
    subject: 'pg',
    week: 1,
    question: "인삼과 홍삼에 대한 설명 중 옳지 않은 것은?",
    options: [
      "인삼과 홍삼은 모두 Panax ginseng을 기원으로 하는 두릅나무과 생약이다.",
      "자료에 제시된 인삼의 PPD:PPT 비율은 3:1이다.",
      "인삼의 PPD계 ginsenoside는 중추신경 억제와 연결되며 용혈작용이 없는 것으로 정리되어 있다.",
      "PPT계 ginsenoside는 중추신경 흥분과 연결되며 용혈작용을 나타내는 것으로 정리되어 있다.",
      "홍삼 제조과정에서는 PPD계 ginsenoside가 PPT계로 전환되는 것으로 정리되어 있다."
    ],
    answer: 4,
    explanation: "자료의 형광펜에는 홍삼 제조 시 PPT → PPD로 전환된다고 정리되어 있음. 9페이지의 PPD/PPT 비교가 핵심임."
  },
  {
    id: 'p-pg9',
    subject: 'pg',
    week: 1,
    question: "세네가의 대표 성분 senegin은 oleanane type의 triterpenoidal saponin이며, 해당 자료에는 UV 317 nm에서 흡수 극대를 나타내는 성분으로 정리되어 있다.",
    options: [
      "O",
      "X"
    ],
    answer: 0,
    explanation: "자료 4페이지에 senegin, oleanane type 및 UV 파장 317 nm에서 흡수 극대를 나타낸다는 설명이 있음."
  },
  {
    id: 'p-pg10',
    subject: 'pg',
    week: 1,
    question: "우슬은 비름과(Amaranthaceae)의 Achyranthes japonica 등을 기원으로 하며 ecdysteroid 성분을 함유한다. 관절통 개선에 사용되고 자궁근수축 작용이 있으므로 임부에게도 안전하게 사용할 수 있다.",
    options: [
      "O",
      "X"
    ],
    answer: 1,
    explanation: "앞부분은 자료와 일치하지만 자궁근수축으로 유산 가능성이 있어 임부에게 금기라고 정리되어 있음."
  },
    // ============================================================
    // 생약학 추가 연습 문제 41개
    // ID: p-pg11 ~ p-pg51
    // week: 4 (7~8주차)
    // ============================================================

    {
    id: 'p-pg11',
    subject: 'pg',
    week: 4,
    question: '다음 생약에 대한 설명으로 옳지 않은 것은?',
    options: [
        '당삼의 기원식물은 Codonopsis pilosula이며 초롱꽃과에 속한다.',
        '당삼의 주요 성분인 lobetyolin은 sesquiterpenoid 계열로 분류된다.',
        '당삼은 강장, 조혈, 면역조절 및 건위 작용을 나타낸다.',
        '대극은 사하작용과 이뇨작용을 나타내는 준하약이다.',
        '대극은 감초와 배합하면 독성이 감소하므로 임신부에게 권장된다.'
    ],
    answer: 4,
    explanation: '대극은 감초와 배합 시 독성이 증가할 수 있으며 임신 중 사용이 금기인 생약이다. 감초가 모든 생약의 독성을 완화한다는 식의 일반화가 함정이다.'
    },
    {
    id: 'p-pg12',
    subject: 'pg',
    week: 4,
    question: '데리스근(Derridis Radix)의 주요 성분과 작용기전이 올바르게 연결된 것은?',
    options: [
        'Rotenone — mitochondrial complex I 억제',
        'Rotenone — Na⁺ channel 지속적 활성화',
        'Reserpine — mitochondrial complex I 억제',
        'Stemonine — VMAT 억제',
        'Kaurenoic acid — acetylcholinesterase 억제'
    ],
    answer: 0,
    explanation: '데리스근의 rotenone은 미토콘드리아 전자전달계 complex I을 억제하여 ATP 생성을 방해한다. Rotenone은 rotenoid 계열 성분이다.'
    },
    {
    id: 'p-pg13',
    subject: 'pg',
    week: 4,
    question: '독활에 대한 설명으로 옳은 것은?',
    options: [
        '국화과 식물의 뿌리이며 costunolide를 지표성분으로 한다.',
        'Aralia continentalis의 뿌리로, kaurenoic acid 및 continentalic acid를 함유한다.',
        'Dipsacus asperoides의 뿌리로, asperosaponin VI를 함유한다.',
        '미나리과 식물로 saikosaponin a가 주요 성분이다.',
        '초롱꽃과 식물로 lobetyolin을 함유한다.'
    ],
    answer: 1,
    explanation: '독활은 두릅나무과 Aralia continentalis이며 diterpenoid 계열의 kaurenoic acid와 continentalic acid가 중요하다.'
    },
    {
    id: 'p-pg14',
    subject: 'pg',
    week: 4,
    question: '목향의 성분 및 약리작용에 대한 설명으로 옳지 않은 것은?',
    options: [
        '국화과에 속하는 생약이다.',
        'Costunolide는 sesquiterpene lactone 계열이다.',
        'Dehydrocostuslactone을 함유한다.',
        '건위 및 담즙분비 촉진 작용과 관련된다.',
        '주요 활성성분은 indole alkaloid인 reserpine이다.'
    ],
    answer: 4,
    explanation: 'Reserpine은 인도사목의 indole alkaloid이다. 목향은 costunolide, dehydrocostuslactone 등 sesquiterpene lactone이 핵심이다.'
    },
    {
    id: 'p-pg15',
    subject: 'pg',
    week: 4,
    question: '방풍 및 그 유사 생약에 대한 설명으로 옳은 것은?',
    options: [
        '원방풍의 기원식물은 Glehnia littoralis이다.',
        '해방풍은 Peucedanum japonicum을 기원으로 한다.',
        '식방풍은 Saposhnikovia divaricata를 기원으로 한다.',
        '원방풍은 Saposhnikovia divaricata이며 chromone 계열 성분을 함유한다.',
        '방풍은 주로 dammarane형 saponin을 함유한다.'
    ],
    answer: 3,
    explanation: '원방풍=Saposhnikovia divaricata, 해방풍=Glehnia littoralis, 식방풍=Peucedanum japonicum. 방풍의 chromone 계열이 주요 구별 포인트다.'
    },
    {
    id: 'p-pg16',
    subject: 'pg',
    week: 4,
    question: '백두옹에 대한 설명으로 옳지 않은 것은?',
    options: [
        '기원식물은 Pulsatilla koreana이다.',
        '미나리아재비과에 속한다.',
        'Protoanemonin은 독성과 관련된 성분이다.',
        'Deoxypodophyllotoxin은 항종양 활성과 관련된다.',
        '주요 성분인 stemonine이 호흡중추를 억제하여 진해작용을 나타낸다.'
    ],
    answer: 4,
    explanation: 'Stemonine은 백부근의 alkaloid이다. 백두옹에서는 ranunculin, protoanemonin, anemonin 및 deoxypodophyllotoxin을 구별한다.'
    },
    {
    id: 'p-pg17',
    subject: 'pg',
    week: 4,
    question: '백미와 백부근을 비교한 설명으로 옳은 것은?',
    options: [
        '백미는 Stemona japonica의 뿌리이며 stemonine을 함유한다.',
        '백부근은 Cynanchum atratum의 뿌리로 pregnane glycoside를 함유한다.',
        '백미의 pregnane glycoside는 acetylcholinesterase 억제와 관련된 연구가 있다.',
        '백부근의 대표 성분은 gentiopicroside이다.',
        '백미와 백부근은 모두 원지과에 속한다.'
    ],
    answer: 2,
    explanation: '백미=Cynanchum atratum, pregnane glycoside. 백부근=Stemona spp., stemonine/neostemonine alkaloid. 백미의 AChE 억제는 전임상 연구 수준의 기전이다.'
    },
    {
    id: 'p-pg18',
    subject: 'pg',
    week: 4,
    question: '백지에 관한 설명으로 옳지 않은 것은?',
    options: [
        '기원식물은 Angelica dahurica이다.',
        'Furanocoumarin 계열 성분을 함유한다.',
        'Imperatorin과 oxypeucedanin이 주요 성분이다.',
        '중추신경계 자극 및 고용량에서 경련 유발 가능성이 있다.',
        '시호와 마찬가지로 saikosaponin a를 대표 지표성분으로 한다.'
    ],
    answer: 4,
    explanation: '시호는 saikosaponin a를 함유하는 미나리과 생약이지만, 백지는 furanocoumarin 계열이 특징이다.'
    },
    {
    id: 'p-pg19',
    subject: 'pg',
    week: 4,
    question: '부자, 오두 및 초오에 대한 설명으로 옳지 않은 것은?',
    options: [
        '부자는 Aconitum carmichaeli의 자근이다.',
        '오두는 Aconitum carmichaeli의 모근이다.',
        '초오는 Aconitum속 식물을 기원으로 한다.',
        'Aconitine류는 독성이 강하므로 법제가 중요하다.',
        '부자와 오두는 기원식물의 속이 완전히 다르다.'
    ],
    answer: 4,
    explanation: '부자와 오두는 모두 Aconitum carmichaeli에서 유래하지만 사용 부위가 자근과 모근으로 다르다.'
    },
    {
    id: 'p-pg20',
    subject: 'pg',
    week: 4,
    question: '부자의 법제와 독성 변화에 대한 설명으로 가장 적절한 것은?',
    options: [
        'Aconine → benzoylaconine → aconitine으로 전환되어 독성이 감소한다.',
        'Aconitine → benzoylaconine → aconine으로 가수분해되어 독성이 감소한다.',
        'Aconitine은 VMAT을 억제하여 저혈압을 유발한다.',
        'Higenamine은 강심배당체에 속한다.',
        '법제는 aconitine의 독성을 높여 약효를 강화하기 위한 과정이다.'
    ],
    answer: 1,
    explanation: 'Aconitine은 가수분해되면서 benzoylaconine, aconine으로 바뀌어 독성이 낮아진다. Aconitine류는 전압개폐성 Na⁺ channel의 비정상적 활성화와 관련되어 부정맥을 유발할 수 있다.'
    },
    {
    id: 'p-pg21',
    subject: 'pg',
    week: 4,
    question: '다음 중 강심작용과 관련된 성분이지만 강심배당체(cardiac glycoside)는 아닌 것은?',
    options: [
        'Digoxin',
        'Digitoxin',
        'Ouabain',
        'Higenamine',
        'Convallatoxin'
    ],
    answer: 3,
    explanation: 'Higenamine은 부자 및 오약 등에 존재하는 alkaloid이며 강심작용과 관련된다. 강심작용이 있다고 모두 강심배당체인 것은 아니다.'
    },
    {
    id: 'p-pg22',
    subject: 'pg',
    week: 4,
    question: '삼칠에 대한 설명으로 옳은 것은?',
    options: [
        'Panax notoginseng을 기원으로 하며 지혈작용과 관련된다.',
        '원지과 식물로 senegin을 함유한다.',
        '주성분은 indole alkaloid인 ajmaline이다.',
        '기원식물은 Panax ginseng의 증숙근이다.',
        '대표 성분은 furanocoumarin인 imperatorin이다.'
    ],
    answer: 0,
    explanation: '삼칠은 두릅나무과 Panax notoginseng으로, notoginsenoside 등 dammarane형 saponin과 지혈작용이 핵심이다.'
    },
    {
    id: 'p-pg23',
    subject: 'pg',
    week: 4,
    question: '세네가와 원지에 대한 설명으로 옳지 않은 것은?',
    options: [
        '두 생약 모두 원지과에 속한다.',
        '세네가의 주요 성분은 senegin이다.',
        '원지의 주요 성분은 onjisaponin이다.',
        '두 생약 모두 triterpenoidal saponin 계열 성분을 함유한다.',
        '세네가의 senegin은 dammarane형 saponin이며 인삼의 ginsenoside와 동일한 골격이다.'
    ],
    answer: 4,
    explanation: '세네가의 senegin은 oleanane형 triterpenoidal saponin이다. 인삼의 ginsenoside는 대표적으로 dammarane형이다.'
    },
    {
    id: 'p-pg24',
    subject: 'pg',
    week: 4,
    question: '다음 생약과 복합제·처방의 연결로 옳지 않은 것은?',
    options: [
        '세네가 — 용각산',
        '원지 — 총명탕',
        '삼칠 — 복방단삼적환',
        '위령선 — 조인스정',
        '백지 — 용각산의 대표 구성 생약'
    ],
    answer: 4,
    explanation: '용각산 관련 구성 생약으로 길경·세네가·행인·감초가 정리되어 있다. 백지는 해당 연결에 해당하지 않는다.'
    },
    {
    id: 'p-pg25',
    subject: 'pg',
    week: 4,
    question: '세신의 안전성에 관한 설명으로 옳은 것은?',
    options: [
        'Aristolochic acid는 신독성 및 발암성과 관련된다.',
        'Methyleugenol은 indole alkaloid 계열이다.',
        '세신은 원지과에 속한다.',
        'Aristolochic acid는 법제 시 반드시 무독성 ginsenoside로 전환된다.',
        '세신의 주요 약리작용은 VMAT 억제에 의한 혈압강하이다.'
    ],
    answer: 0,
    explanation: '세신은 쥐방울덩굴과 Asarum속 식물이며, aristolochic acid의 신독성·발암성 위험이 핵심 안전성 포인트다.'
    },
    {
    id: 'p-pg26',
    subject: 'pg',
    week: 4,
    question: '속단과 한속단의 비교로 옳은 것은?',
    options: [
        '속단과 한속단은 모두 산토끼꽃과에 속한다.',
        '속단은 phenylethanoid인 verbascoside가 대표 성분이다.',
        '한속단은 꿀풀과이며 verbascoside와 isoverbascoside를 함유한다.',
        '한속단은 Panax속 식물로 dammarane형 saponin을 함유한다.',
        '속단의 대표 성분은 reserpine이다.'
    ],
    answer: 2,
    explanation: '속단=Dipsacus asperoides, 산토끼꽃과, iridoid와 asperosaponin VI. 한속단=Phlomis umbrosa, 꿀풀과, phenylethanoid glycosides.'
    },
    {
    id: 'p-pg27',
    subject: 'pg',
    week: 4,
    question: '시호에 관한 설명으로 옳지 않은 것은?',
    options: [
        'Bupleurum falcatum을 기원으로 한다.',
        '미나리과에 속한다.',
        'Saikosaponin a는 oleanane형 triterpenoidal saponin이다.',
        '항염증작용과 관련된다.',
        '미나리과에 속하므로 대표 지표성분은 반드시 furanocoumarin이다.'
    ],
    answer: 4,
    explanation: '과명이 같아도 주성분 계열이 반드시 같지는 않다. 시호는 미나리과이지만 saikosaponin이 핵심이며 백지의 furanocoumarin과 구별해야 한다.'
    },
    {
    id: 'p-pg28',
    subject: 'pg',
    week: 4,
    question: '오약에 대한 설명으로 옳은 것은?',
    options: [
        'Lindera strychnifolia를 기원으로 하며 linderene과 higenamine을 함유한다.',
        '국화과 식물로 costunolide를 함유한다.',
        '기원식물은 Gentiana lutea이다.',
        '대표 성분인 reserpine은 VMAT을 억제한다.',
        '주성분은 pregnane glycoside인 cynatratoside이다.'
    ],
    answer: 0,
    explanation: '오약은 녹나무과 Lindera strychnifolia이며 sesquiterpenoid인 linderene, alkaloid인 higenamine 등이 중요하다.'
    },
    {
    id: 'p-pg29',
    subject: 'pg',
    week: 4,
    question: '용담, 겐티아나근 및 진교의 공통적인 특징으로 가장 적절한 것은?',
    options: [
        '모두 미나리과에 속하며 coumarin을 함유한다.',
        '모두 용담과에 속하며 secoiridoid 계열 성분을 함유한다.',
        '모두 원지과에 속하며 oleanane형 saponin을 함유한다.',
        '모두 두릅나무과에 속하며 dammarane형 saponin을 함유한다.',
        '모두 쥐방울덩굴과에 속하며 aristolochic acid를 함유한다.'
    ],
    answer: 1,
    explanation: '용담과 세 생약은 gentiopicroside 등 secoiridoid 계열 성분을 공통적으로 갖는다. 진교에는 gentianine alkaloid도 중요하다.'
    },
    {
    id: 'p-pg30',
    subject: 'pg',
    week: 4,
    question: '겐티아나근에 대한 설명으로 옳지 않은 것은?',
    options: [
        'Gentiana lutea를 기원으로 한다.',
        'Gentiopicroside와 swertiamarin을 함유한다.',
        '고미건위약으로 사용된다.',
        '위·십이지장 궤양 환자에서는 사용에 주의하거나 피해야 한다.',
        '대표 성분은 steroid alkaloid인 stemonine이다.'
    ],
    answer: 4,
    explanation: 'Stemonine은 백부근 성분이다. 겐티아나근은 secoiridoid glycoside와 쓴맛에 의한 건위작용을 연결한다.'
    },
    {
    id: 'p-pg31',
    subject: 'pg',
    week: 4,
    question: '우슬에 대한 설명으로 옳은 것은?',
    options: [
        '기원식물은 Achyranthes japonica이며 비름과에 속한다.',
        '주요 성분은 saikosaponin a이다.',
        '임신 중 자궁수축 위험과 관계없이 안전하게 사용할 수 있다.',
        '주성분은 indole alkaloid인 reserpine이다.',
        '기원식물은 Curcuma longa이다.'
    ],
    answer: 0,
    explanation: '우슬은 비름과 Achyranthes japonica이며 ecdysterone, inokosterone 등 ecdysteroid 계열 성분과 자궁수축작용이 중요하다.'
    },
    {
    id: 'p-pg32',
    subject: 'pg',
    week: 4,
    question: '울금의 주성분과 성분 계열이 올바르게 연결된 것은?',
    options: [
        'Curcumin — diarylheptanoid',
        'Curcumin — indole alkaloid',
        'Turmerone — triterpenoidal saponin',
        'Curcumin — secoiridoid',
        'Turmerone — cardiac glycoside'
    ],
    answer: 0,
    explanation: '울금의 curcumin은 diarylheptanoid 계열이며 turmerone은 정유 성분이다. 울금은 생강과에 속한다.'
    },
    {
    id: 'p-pg33',
    subject: 'pg',
    week: 4,
    question: '원지에 관한 설명으로 옳지 않은 것은?',
    options: [
        'Polygala tenuifolia를 기원으로 한다.',
        '원지과에 속한다.',
        'Onjisaponin을 함유한다.',
        '진해·거담 및 기억력 관련 연구가 있다.',
        '대표 성분인 reserpine은 VMAT을 억제한다.'
    ],
    answer: 4,
    explanation: 'Reserpine은 인도사목의 성분이다. 원지의 onjisaponin은 triterpenoidal saponin 계열이다.'
    },
    {
    id: 'p-pg34',
    subject: 'pg',
    week: 4,
    question: '위령선에 대한 설명으로 옳은 것은?',
    options: [
        'Clematis속 식물을 기원으로 하며 미나리아재비과에 속한다.',
        '원지과 식물로 senegin을 함유한다.',
        '조인스정의 구성 생약은 위령선·세네가·인삼이다.',
        '주성분은 indole alkaloid인 ajmaline이다.',
        '주요 효능은 VMAT 억제에 의한 진정작용이다.'
    ],
    answer: 0,
    explanation: '위령선은 Clematis속의 미나리아재비과 생약이다. 조인스정은 위령선·괄루근·하고초 추출물을 이용한 제제로 정리된다.'
    },
    {
    id: 'p-pg35',
    subject: 'pg',
    week: 4,
    question: '은시호에 대한 설명으로 옳지 않은 것은?',
    options: [
        '석죽과 식물을 기원으로 한다.',
        'Dichotomin 등 cyclopeptide 성분이 알려져 있다.',
        '해열작용과 관련된다.',
        '시호와 같은 Bupleurum falcatum의 다른 이름이다.',
        'Stellaria dichotoma가 기원식물로 언급된다.'
    ],
    answer: 3,
    explanation: '은시호는 시호와 이름이 비슷하지만 기원식물과 과명이 다르다. 시호는 미나리과 Bupleurum, 은시호는 석죽과 식물이다.'
    },
    {
    id: 'p-pg36',
    subject: 'pg',
    week: 4,
    question: '인도사목의 reserpine 작용기전으로 가장 적절한 것은?',
    options: [
        'VMAT 억제 → monoamine 소포 저장 감소 → 교감신경 전달 저하',
        'COMT 억제 → catecholamine 증가 → 혈압 상승',
        'Na⁺ channel 지속 활성화 → 강심작용',
        'Mitochondrial complex I 억제 → 살충작용',
        'Acetylcholinesterase 억제 → acetylcholine 증가'
    ],
    answer: 0,
    explanation: 'Reserpine은 VMAT을 억제해 noradrenaline, dopamine, serotonin의 소포 저장을 고갈시키며 혈압강하·진정작용 및 우울 증상 등의 부작용과 연결된다.'
    },
    {
    id: 'p-pg37',
    subject: 'pg',
    week: 4,
    question: '인도사목에 대한 설명으로 옳지 않은 것은?',
    options: [
        'Rauwolfia serpentina를 기원으로 한다.',
        '협죽도과에 속한다.',
        'Reserpine은 indole alkaloid이다.',
        'Ajmaline은 항부정맥 작용과 관련된다.',
        'Reserpine은 신경전달물질의 소포 저장을 증가시켜 교감신경을 흥분시킨다.'
    ],
    answer: 4,
    explanation: 'Reserpine은 소포 저장을 감소시킨다. Ajmaline은 항부정맥 성분으로 구별한다.'
    },
    {
    id: 'p-pg38',
    subject: 'pg',
    week: 4,
    question: '인삼의 주요 ginsenoside에 대한 설명으로 옳은 것은?',
    options: [
        'Ginsenoside는 대표적으로 dammarane형 triterpenoidal saponin이다.',
        'Ginsenoside Rb1은 대표적인 furanocoumarin이다.',
        'Ginsenoside Rg1은 indole alkaloid이다.',
        '인삼은 원지과 식물이다.',
        '인삼의 대표 성분은 rotenone이다.'
    ],
    answer: 0,
    explanation: '인삼은 두릅나무과 Panax ginseng이며 ginsenoside Rb1, Rg1 등 dammarane형 triterpenoidal saponin이 핵심이다.'
    },
    {
    id: 'p-pg39',
    subject: 'pg',
    week: 4,
    question: '인삼의 protopanaxadiol(PPD)형과 protopanaxatriol(PPT)형의 비교로 강의 정리본에 부합하는 것은?',
    options: [
        'PPD형은 Rg 계열, PPT형은 Rb 계열이 대표적이다.',
        'PPD형은 Rb·Rc 계열, PPT형은 Rg·Rf 계열이 대표적이다.',
        'PPD형과 PPT형은 모두 indole alkaloid이다.',
        'PPD형은 furanocoumarin, PPT형은 chromone이다.',
        'PPD형은 세네가의 senegin과 동일한 oleanane 골격이다.'
    ],
    answer: 1,
    explanation: 'PPD형은 Rb, Rc 계열, PPT형은 Rg, Rf 계열로 정리한다. 둘 다 인삼의 dammarane형 사포닌에 속한다.'
    },
    {
    id: 'p-pg40',
    subject: 'pg',
    week: 4,
    question: '홍삼에 관한 설명으로 옳은 것은?',
    options: [
        '인삼을 증숙하여 제조하며 가공 중 ginsenoside 조성이 변화한다.',
        '원지의 뿌리를 건조한 생약이다.',
        '대표 성분은 stemonine이다.',
        '기원식물은 Panax notoginseng이다.',
        '증숙 과정은 모든 ginsenoside를 reserpine으로 전환한다.'
    ],
    answer: 0,
    explanation: '홍삼은 Panax ginseng을 증숙한 가공품이며, 열처리로 일부 ginsenoside의 당 부분과 malonyl기가 변화해 성분 조성이 달라진다.'
    },
    {
    id: 'p-pg41',
    subject: 'pg',
    week: 4,
    question: '다음 중 같은 식물과(科)에 속하는 생약만으로 묶인 것은?',
    options: [
        '독활 — 삼칠 — 인삼',
        '방풍 — 백지 — 세신',
        '목향 — 울금 — 시호',
        '원지 — 세네가 — 백부근',
        '부자 — 우슬 — 위령선'
    ],
    answer: 0,
    explanation: '독활·삼칠·인삼은 모두 두릅나무과이다. 방풍·백지는 미나리과지만 세신은 쥐방울덩굴과이다.'
    },
    {
    id: 'p-pg42',
    subject: 'pg',
    week: 4,
    question: '다음 중 같은 성분 계열을 대표적으로 함유하는 생약의 연결로 가장 적절한 것은?',
    options: [
        '백지 — 시호 : furanocoumarin',
        '속단 — 한속단 : phenylethanoid glycoside',
        '용담 — 진교 : secoiridoid',
        '세네가 — 인삼 : 동일한 oleanane형 saponin',
        '데리스근 — 인도사목 : 동일한 indole alkaloid'
    ],
    answer: 2,
    explanation: '용담과 진교는 gentiopicroside 등 secoiridoid를 공통적으로 함유한다. 속단과 한속단, 세네가와 인삼은 비슷해 보여도 대표 성분 계열 또는 골격이 다르다.'
    },
    {
    id: 'p-pg43',
    subject: 'pg',
    week: 4,
    question: '다음 중 기원식물과 대표 성분의 연결이 옳지 않은 것은?',
    options: [
        'Codonopsis pilosula — lobetyolin',
        'Angelica dahurica — imperatorin',
        'Polygala senega — senegin',
        'Bupleurum falcatum — saikosaponin a',
        'Rauwolfia serpentina — costunolide'
    ],
    answer: 4,
    explanation: 'Rauwolfia serpentina는 reserpine을 함유하며 costunolide는 목향의 성분이다.'
    },
    {
    id: 'p-pg44',
    subject: 'pg',
    week: 4,
    question: '다음 생약 중 임신 중 자궁수축 또는 독성 위험과 관련하여 주의해야 하는 생약만으로 가장 적절하게 묶인 것은?',
    options: [
        '우슬 — 울금 — 대극',
        '당삼 — 인삼 — 겐티아나근',
        '용담 — 세네가 — 목향',
        '독활 — 원지 — 방풍',
        '진교 — 백부근 — 데리스근'
    ],
    answer: 0,
    explanation: '우슬은 자궁수축, 울금은 자궁수축 관련 주의, 대극은 강한 사하작용과 독성 때문에 임신 중 사용을 피해야 한다. 금기와 주의의 강도는 각각 구별해야 한다.'
    },
    {
    id: 'p-pg45',
    subject: 'pg',
    week: 4,
    question: '다음 설명 중 옳은 것만을 모두 고른 것은?\nㄱ. 백지는 furanocoumarin을 함유한다.\nㄴ. 시호는 saikosaponin a를 함유한다.\nㄷ. 방풍은 chromone 계열 성분을 함유한다.\nㄹ. 세신의 대표 성분은 ginsenoside Rb1이다.',
    options: [
        'ㄱ, ㄴ',
        'ㄱ, ㄷ',
        'ㄴ, ㄹ',
        'ㄱ, ㄴ, ㄷ',
        'ㄱ, ㄴ, ㄷ, ㄹ'
    ],
    answer: 3,
    explanation: 'ㄱ·ㄴ·ㄷ은 모두 옳다. 세신은 methyleugenol 등의 정유 성분 및 aristolochic acid 관련 안전성 이슈가 중요하다. Ginsenoside Rb1은 인삼 성분이다.'
    },
    {
    id: 'p-pg46',
    subject: 'pg',
    week: 4,
    question: '다음 설명 중 옳지 않은 것은?',
    options: [
        '대극의 phorbol ester는 피부 종양 촉진과 관련된다.',
        '부자의 aconitine류는 심각한 부정맥을 유발할 수 있다.',
        '세신의 aristolochic acid는 신독성 위험과 관련된다.',
        '인도사목의 reserpine은 우울 증상 등의 부작용을 일으킬 수 있다.',
        '백지의 furanocoumarin은 강한 진정작용만 나타내며 경련 위험은 없다.'
    ],
    answer: 4,
    explanation: '백지의 성분은 강의 정리본에서 중추신경계 자극 및 고용량 경련 위험과 연결된다.'
    },
    {
    id: 'p-pg47',
    subject: 'pg',
    week: 4,
    question: '다음 생약과 성분 계열의 연결 중 옳은 것만을 모두 고른 것은?\nㄱ. 백미 — pregnane glycoside\nㄴ. 백부근 — alkaloid\nㄷ. 한속단 — phenylethanoid glycoside\nㄹ. 시호 — oleanane형 triterpenoidal saponin',
    options: [
        'ㄱ, ㄴ',
        'ㄱ, ㄷ',
        'ㄴ, ㄹ',
        'ㄱ, ㄴ, ㄷ',
        'ㄱ, ㄴ, ㄷ, ㄹ'
    ],
    answer: 4,
    explanation: '네 연결 모두 옳다. 특히 백미와 백부근, 속단과 한속단, 시호와 다른 미나리과 생약을 교차 비교하는 문제다.'
    },
    {
    id: 'p-pg48',
    subject: 'pg',
    week: 4,
    question: '다음 중 생약의 기원식물 또는 사용 부위에 관한 설명으로 옳지 않은 것은?',
    options: [
        '부자는 Aconitum carmichaeli의 자근이다.',
        '오두는 Aconitum carmichaeli의 모근이다.',
        '홍삼은 Panax ginseng을 증숙하여 제조한다.',
        '삼칠은 Panax notoginseng을 기원으로 한다.',
        '인삼과 홍삼은 서로 다른 식물과에 속한다.'
    ],
    answer: 4,
    explanation: '인삼과 홍삼은 모두 두릅나무과 Panax ginseng을 기원으로 한다. 가공법에 따라 생약명이 달라진다.'
    },
    {
    id: 'p-pg49',
    subject: 'pg',
    week: 4,
    question: '다음 중 약리작용과 성분 또는 생약의 연결이 가장 적절하지 않은 것은?',
    options: [
        'Rotenone — mitochondrial complex I 억제',
        'Reserpine — VMAT 억제',
        'Aconitine — Na⁺ channel 비정상적 활성화',
        '백미의 pregnane glycoside — AChE 억제 관련 연구',
        'Senegin — benzodiazepine 수용체 결합 억제를 통한 중추흥분'
    ],
    answer: 4,
    explanation: 'Benzodiazepine 결합 관련 중추 자극·경련 위험은 백지의 성분과 연결되는 강의 포인트다. Senegin은 세네가의 사포닌 성분이다.'
    },
    {
    id: 'p-pg50',
    subject: 'pg',
    week: 4,
    question: '다음 생약에 대한 설명 중 옳은 것만을 모두 고른 것은?\nㄱ. 독활의 kaurenoic acid는 diterpenoid 계열이다.\nㄴ. 목향의 costunolide는 sesquiterpene lactone이다.\nㄷ. 오약의 linderene은 sesquiterpenoid 계열이다.\nㄹ. 울금의 curcumin은 diarylheptanoid 계열이다.',
    options: [
        'ㄱ, ㄴ',
        'ㄱ, ㄷ',
        'ㄴ, ㄹ',
        'ㄱ, ㄴ, ㄷ',
        'ㄱ, ㄴ, ㄷ, ㄹ'
    ],
    answer: 4,
    explanation: '네 연결 모두 옳다. 성분의 이름만 외우지 않고 탄소 골격·계열까지 구분하는 문제다.'
    },
    {
    id: 'p-pg51',
    subject: 'pg',
    week: 4,
    question: '다음 중 생약과 대표적인 복합제·처방의 연결이 모두 옳은 것은?',
    options: [
        '원지—총명탕 / 위령선—조인스정 / 삼칠—복방단삼적환',
        '원지—용각산 / 위령선—총명탕 / 삼칠—조인스정',
        '세네가—조인스정 / 삼칠—총명탕 / 원지—용각산',
        '백지—복방단삼적환 / 독활—용각산 / 울금—총명탕',
        '오약—조인스정 / 백미—용각산 / 인도사목—총명탕'
    ],
    answer: 0,
    explanation: '총명탕은 원지, 조인스정은 위령선, 복방단삼적환은 삼칠, 용각산은 세네가와 연결해 암기한다.'
    },
    {
    id: 'p-im-w1-1',
    subject: 'im',
    week: 1,
    question: '선천면역(innate immunity)의 특징으로 가장 적절한 것은?',
    options: [
    '항원 특이적 기억세포를 형성한다.',
    'PAMP를 인식하는 PRR을 이용해 빠르게 반응한다.',
    'V(D)J recombination으로 수용체 다양성을 만든다.',
    '첫 항원 노출 후에만 활성화된다.'
    ],
    answer: 1,
    explanation: '선천면역은 TLR 등의 PRR로 보존된 병원체 패턴을 인식하여 빠르게 반응한다.'
    },
    {
    id: 'p-im-w1-2',
    subject: 'im',
    week: 1,
    question: '수동면역(passive immunization)에 해당하는 사례는?',
    options: [
    '백신 접종 후 기억 B cell 형성',
    '감염 후 특이적 T cell 증식',
    '면역된 개체의 항체가 포함된 혈청 투여',
    '항원 노출 후 항체 유전자 재배열'
    ],
    answer: 2,
    explanation: '수동면역은 이미 형성된 항체를 전달하므로 즉각적인 보호가 가능하지만 일반적으로 면역기억을 유도하지 않는다.'
    },
    {
    id: 'p-im-w1-3',
    subject: 'im',
    week: 1,
    question: 'Humoral immunity의 주요 효과 인자는?',
    options: [
    '항체(immunoglobulin)',
    'CD8 T cell의 perforin',
    'NK cell의 granzyme',
    '상피세포의 cilia'
    ],
    answer: 0,
    explanation: 'Humoral immunity는 B cell에서 유래한 항체를 매개로 한다.'
    },
    {
    id: 'p-im-w1-4',
    subject: 'im',
    week: 1,
    question: 'Clonal selection에 대한 설명으로 옳은 것은?',
    options: [
    '항원이 모든 lymphocyte를 동일하게 증식시킨다.',
    '항원에 결합하는 특이적 lymphocyte clone이 선택되어 증식한다.',
    '항원 노출 시 모든 clone의 수용체 특이성이 바뀐다.',
    '선천면역세포만 선택적으로 증식한다.'
    ],
    answer: 1,
    explanation: '특정 항원을 인식하는 clone이 선택되고 증식·분화하여 effector 및 memory cell을 형성한다.'
    },
    {
    id: 'p-im-w1-5',
    subject: 'im',
    week: 1,
    question: '동일한 항원에 재노출되었을 때 나타나는 secondary immune response의 일반적인 특징은?',
    options: [
    '더 느리고 약하다.',
    '반응 강도는 항상 동일하다.',
    '더 빠르고 강하며 오래 지속될 수 있다.',
    '항원 특이성이 완전히 사라진다.'
    ],
    answer: 2,
    explanation: 'Memory lymphocyte가 존재하여 2차 면역반응이 보통 더 빠르고 강하게 일어난다.'
    },
    {
    id: 'p-im-w1-6',
    subject: 'im',
    week: 1,
    question: '선천면역이 적응면역의 활성화에 기여하는 과정으로 가장 적절한 것은?',
    options: [
    'Dendritic cell의 항원제시 및 co-stimulation',
    '적응면역세포의 모든 수용체 제거',
    '항원 특이적 T cell의 무조건적인 억제',
    '항원과 무관한 항체의 영구적 생성'
    ],
    answer: 0,
    explanation: 'Dendritic cell은 항원을 제시하고 공동자극을 제공하여 naive T cell 활성화를 돕는다.'
    },
    {
    id: 'p-im-w1-7',
    subject: 'im',
    week: 1,
    question: '다음 중 선천면역의 물리적 방어장벽에 해당하는 것은?',
    options: [
    'Memory B cell',
    '항원 특이적 IgG',
    '피부와 점액층',
    'Clonally expanded T cell'
    ],
    answer: 2,
    explanation: '피부·mucus·cilia는 병원체 침입을 막는 선천면역의 장벽이다.'
    },
    {
    id: 'p-im-w1-8',
    subject: 'im',
    week: 1,
    question: '면역계가 자기 성분을 부적절하게 공격하는 현상은?',
    options: [
    'Immunologic memory',
    'Autoimmunity',
    'Passive immunization',
    'Opsonization'
    ],
    answer: 1,
    explanation: 'Autoimmunity는 자기 항원에 대한 면역반응으로 조직 손상을 유발할 수 있다.'
    },
    {
    id: 'p-im-w1-9',
    subject: 'im',
    week: 1,
    question: '항원 특이적 면역기억을 형성하는 세포 조합으로 가장 적절한 것은?',
    options: [
    'Neutrophil과 erythrocyte',
    'Basophil과 platelet',
    'B lymphocyte와 T lymphocyte',
    'Osteoblast와 reticular cell'
    ],
    answer: 2,
    explanation: '적응면역의 B/T lymphocyte는 항원 특이적 effector 및 memory population을 형성한다.'
    },
    {
    id: 'p-im-w1-10',
    subject: 'im',
    week: 1,
    question: '선천면역의 TLR이 주로 인식하는 대상은?',
    options: [
    '병원체의 보존된 분자 패턴(PAMP)',
    '개별 T cell의 고유한 TCR 서열',
    '항체의 무작위 V(D)J 접합부',
    '성숙 적혈구의 hemoglobin'
    ],
    answer: 0,
    explanation: 'TLR은 PRR의 한 종류로 PAMP를 인식하여 초기 면역 신호를 유도한다.'
    },
    {
    id: 'p-im-w1-11',
    subject: 'im',
    week: 1,
    question: 'Primary lymphoid organ에 해당하는 조합은?',
    options: [
    'Lymph node와 spleen',
    'Bone marrow와 thymus',
    'Spleen과 MALT',
    'Lymph node와 MALT'
    ],
    answer: 1,
    explanation: 'Bone marrow와 thymus는 lymphocyte 발달 및 성숙이 이루어지는 일차 림프기관이다.'
    },
    {
    id: 'p-im-w1-12',
    subject: 'im',
    week: 1,
    question: 'Hematopoietic stem cell(HSC)의 핵심 특성은?',
    options: [
    'Self-renewal과 multipotency',
    '항체 분비와 항원 특이적 기억',
    '성숙 적혈구로만 분화',
    '항상 분열 능력이 없는 상태'
    ],
    answer: 0,
    explanation: 'HSC는 자기재생과 여러 혈액세포 계통으로의 분화 능력을 가진다.'
    },
    {
    id: 'p-im-w1-13',
    subject: 'im',
    week: 1,
    question: 'Mouse HSC enrichment에 사용하는 LSK 표현형은?',
    options: [
    'Lin⁺Sca-1⁻c-Kit⁻',
    'Lin⁻Sca-1⁻c-Kit⁺',
    'Lin⁻Sca-1⁺c-Kit⁺',
    'Lin⁺Sca-1⁺c-Kit⁻'
    ],
    answer: 2,
    explanation: 'LSK는 Lin-negative, Sca-1-positive, c-Kit-positive를 뜻한다.'
    },
    {
    id: 'p-im-w1-14',
    subject: 'im',
    week: 1,
    question: '조혈세포의 negative selection을 이용한 HSC enrichment 방법은?',
    options: [
    '분화된 세포의 lineage marker 양성 세포 제거',
    '모든 Lin⁻ 세포 제거',
    '항체를 분비하는 B cell만 증식',
    'TCR 발현세포만 선별'
    ],
    answer: 0,
    explanation: 'Lineage marker 양성인 분화세포를 제거하면 Lin⁻ 집단을 농축할 수 있다.'
    },
    {
    id: 'p-im-w1-15',
    subject: 'im',
    week: 1,
    question: 'Allogeneic hematopoietic stem cell transplantation에 대한 설명으로 옳은 것은?',
    options: [
    '공여자와 수여자가 동일인이다.',
    '유전적으로 동일한 개체 사이의 이식만 뜻한다.',
    '유전적으로 다른 개체 사이의 이식이며 GVHD 위험이 있다.',
    '항상 면역억제 없이 진행된다.'
    ],
    answer: 2,
    explanation: 'Allogeneic 이식은 유전적으로 다른 공여자와 수여자 사이의 이식으로 GVHD가 발생할 수 있다.'
    },
    {
    id: 'p-im-w1-16',
    subject: 'im',
    week: 1,
    question: 'NK cell이 항체로 코팅된 표적세포를 죽이는 ADCC에 관여하는 수용체는?',
    options: [
    'CD19',
    'CD16 (Fc receptor)',
    'CD4',
    'CD21'
    ],
    answer: 1,
    explanation: 'NK cell의 CD16은 항체 Fc 부위를 인식하여 ADCC를 매개한다.'
    },
    {
    id: 'p-im-w1-17',
    subject: 'im',
    week: 1,
    question: 'Phagocytosis의 정상적인 순서로 가장 적절한 것은?',
    options: [
    'Phagolysosome → phagosome → pseudopodia',
    'Pseudopodia → phagosome → lysosome fusion → phagolysosome',
    'Lysosome fusion → pseudopodia → phagosome',
    'Antibody secretion → thymic selection → phagosome'
    ],
    answer: 1,
    explanation: 'Pseudopodia가 표적을 포획해 phagosome을 형성하고 lysosome과 융합해 분해한다.'
    },
    {
    id: 'p-im-w1-18',
    subject: 'im',
    week: 1,
    question: 'Thymus에서 positive selection의 주된 결과는?',
    options: [
    'Self-MHC를 인식할 수 있는 thymocyte의 생존',
    '자기 peptide-MHC에 강하게 반응하는 세포의 선택적 증식',
    'B cell의 class-switch recombination',
    '모든 T cell의 apoptosis'
    ],
    answer: 0,
    explanation: 'Positive selection은 자기 MHC를 적절히 인식할 수 있는 T cell을 생존시킨다.'
    },
    {
    id: 'p-im-w1-19',
    subject: 'im',
    week: 1,
    question: 'Lymph node에서 naive T cell이 주로 분포하는 영역은?',
    options: [
    'Cortex의 B-cell follicle',
    'Paracortex',
    'Germinal center 내부만',
    'Medullary sinus만'
    ],
    answer: 1,
    explanation: 'Lymph node의 paracortex는 T-cell zone이고 cortex의 follicle은 B-cell zone이다.'
    },
    {
    id: 'p-im-w1-20',
    subject: 'im',
    week: 1,
    question: 'Secondary follicle이 primary follicle과 구별되는 특징은?',
    options: [
    'Germinal center 형성',
    'HEV의 완전한 소실',
    'T cell 성숙이 일어나는 thymic cortex 형성',
    'HSC의 self-renewal만 일어남'
    ],
    answer: 0,
    explanation: 'Secondary follicle에는 germinal center가 형성되어 B cell 반응과 친화도 성숙이 진행된다.'
    },
    {
        id: 'pk1',
        subject: 'pk',
        week: 1,
        question: '다음 중 Pharmacokinetics(PK)와 Pharmacodynamics(PD)에 대한 설명으로 가장 적절한 것은?',
        options: [
        'PK는 약물의 수용체 결합 효과를, PD는 약물의 흡수와 배설을 연구한다.',
        'PK는 약물이 체내에서 겪는 ADME 과정을, PD는 약물 농도에 따른 생체 반응을 연구한다.',
        'PK와 PD는 모두 약물의 대사 과정만을 연구한다.',
        'PK는 약물의 독성만을, PD는 약물의 치료 효과만을 연구한다.',
        'PK는 약물의 화학적 합성을, PD는 약물의 물리적 안정성을 연구한다.'
        ],
        answer: 1,
        explanation: 'PK는 Absorption, Distribution, Metabolism, Excretion을 다루며, PD는 약물 농도와 약리학적 효과 사이의 관계를 다룬다.'
    },

    {
        id: 'pk2',
        subject: 'pk',
        week: 1,
        question: '0차 소실(Zero-order elimination)을 따르는 약물의 특징으로 옳은 것은?',
        options: [
        '단위시간당 일정한 비율의 약물이 소실된다.',
        '소실 속도는 체내 약물량에 비례한다.',
        '반감기는 초기 약물량과 관계없이 일정하다.',
        '단위시간당 일정한 양의 약물이 소실된다.',
        '약물량은 시간에 따라 지수적으로 감소한다.'
        ],
        answer: 3,
        explanation: '0차 소실에서는 소실 속도 k₀가 일정하다. A = A₀ − k₀t이므로 약물량은 시간에 따라 직선적으로 감소한다.'
    },

    {
        id: 'pk3',
        subject: 'pk',
        week: 1,
        question: '어떤 약물의 1차 소실 속도상수 k가 0.231 h⁻¹이다. 이 약물의 소실반감기는?',
        options: [
        '1시간',
        '2시간',
        '3시간',
        '4시간',
        '6시간'
        ],
        answer: 2,
        explanation: 't½ = 0.693/k = 0.693/0.231 = 3시간이다.'
    },

    {
        id: 'pk4',
        subject: 'pk',
        week: 1,
        question: '어떤 약물 200 mg을 정맥투여하였다. 이 약물은 1차 소실을 따르며 반감기는 4시간이다. 투여 후 12시간이 지났을 때 체내에 남아 있는 약물량은?',
        options: [
        '12.5 mg',
        '25 mg',
        '50 mg',
        '75 mg',
        '100 mg'
        ],
        answer: 1,
        explanation: '12시간은 반감기 3회에 해당한다. A = 200 × (1/2)³ = 25 mg이다.'
    },

    {
        id: 'pk5',
        subject: 'pk',
        week: 1,
        question: '약물의 조직 분포에 대한 설명으로 옳은 것은?',
        options: [
        '모든 조직은 동일한 속도로 약물을 공급받는다.',
        '지방과 뼈는 일반적으로 간과 신장보다 혈류량이 많다.',
        '조직의 혈류량과 약물의 물리화학적 성질은 약물 분포에 영향을 준다.',
        '약물의 분포 속도는 약물의 지용성과 무관하다.',
        '정맥투여된 약물은 조직으로 분포하지 않는다.'
        ],
        answer: 2,
        explanation: '조직 분포에는 혈류량과 약물의 지용성, 이온화 정도 등의 요인이 관여한다. 간·신장·폐는 혈류 공급이 많은 조직에 해당한다.'
    },


    // ==================== 3~4주차 ====================

    {
        id: 'pk6',
        subject: 'pk',
        week: 2,
        question: '어떤 약물의 분포용적이 40 L이고, 1차 소실 속도상수가 0.2 h⁻¹이다. 전신 청소율은?',
        options: [
        '2 L/h',
        '4 L/h',
        '6 L/h',
        '8 L/h',
        '10 L/h'
        ],
        answer: 3,
        explanation: 'CL = k × Vd = 0.2 × 40 = 8 L/h이다.'
    },

    {
        id: 'pk7',
        subject: 'pk',
        week: 2,
        question: '어떤 장기의 혈류량이 1000 mL/min이고, 동맥혈 약물 농도가 10 mg/L, 정맥혈 약물 농도가 6 mg/L이다. 이 장기의 청소율은?',
        options: [
        '200 mL/min',
        '400 mL/min',
        '600 mL/min',
        '800 mL/min',
        '1000 mL/min'
        ],
        answer: 1,
        explanation: 'E = (Ca − Cv)/Ca = (10 − 6)/10 = 0.4이다. CL = Q × E = 1000 × 0.4 = 400 mL/min이다.'
    },

    {
        id: 'pk8',
        subject: 'pk',
        week: 2,
        question: '어떤 약물 200 mg을 정맥투여하였으며, AUC가 25 mg·h/L로 측정되었다. 전신 청소율은?',
        options: [
        '2 L/h',
        '4 L/h',
        '6 L/h',
        '8 L/h',
        '10 L/h'
        ],
        answer: 3,
        explanation: 'CL = DoseIV/AUC = 200/25 = 8 L/h이다.'
    },

    {
        id: 'pk9',
        subject: 'pk',
        week: 2,
        question: 'Michaelis–Menten 소실을 따르는 약물에서 혈중 농도가 Km보다 매우 높을 때 나타나는 현상으로 가장 적절한 것은?',
        options: [
        '소실 속도가 농도에 정비례한다.',
        '소실 속도가 0에 가까워진다.',
        '소실 속도가 Vmax에 가까워진다.',
        '소실 반감기가 항상 일정하다.',
        '소실 속도가 농도의 제곱에 비례한다.'
        ],
        answer: 2,
        explanation: 'v = Vmax × C/(Km + C)이다. C가 Km보다 매우 크면 v ≈ Vmax가 되어 0차 소실과 유사하게 나타난다.'
    },

    {
        id: 'pk10',
        subject: 'pk',
        week: 2,
        question: '어떤 약물의 Vmax = 100 mg/h, Km = 5 mg/L이다. 혈중 농도가 5 mg/L일 때 소실 속도는?',
        options: [
        '20 mg/h',
        '25 mg/h',
        '40 mg/h',
        '50 mg/h',
        '100 mg/h'
        ],
        answer: 3,
        explanation: 'v = Vmax × C/(Km + C) = 100 × 5/(5 + 5) = 50 mg/h이다. C = Km이면 소실 속도는 Vmax/2이다.'
    },


    // ==================== 5~6주차 ====================

    {
        id: 'pk11',
        subject: 'pk',
        week: 3,
        question: 'One-compartment model의 기본 가정으로 가장 적절한 것은?',
        options: [
        '약물이 반드시 두 조직에 분포한다.',
        '약물은 체내에 들어온 후 즉시 균일하게 분포한다고 가정한다.',
        '약물의 소실은 반드시 0차 속도를 따른다.',
        '약물의 분포가 완료되기 전에는 소실이 발생하지 않는다.',
        '혈중 농도는 반드시 두 개의 지수항으로 표현된다.'
        ],
        answer: 1,
        explanation: '1구획모델은 약물이 체내에 들어오면 하나의 균일한 구획에 즉시 분포한다고 가정한다.'
    },

    {
        id: 'pk12',
        subject: 'pk',
        week: 3,
        question: '2구획모델에서 정맥투여 후 혈장 농도가 Cp = Ae^(−αt) + Be^(−βt)를 따른다. 이에 대한 설명으로 옳은 것은?',
        options: [
        'α는 주로 소실 단계, β는 주로 분포 단계를 나타낸다.',
        '중심구획과 말초구획에서 동일한 속도로 소실된다.',
        '초기의 빠른 농도 감소는 주로 분포 단계와 관련된다.',
        '혈중 농도는 하나의 지수항으로 표현된다.',
        '말초구획에서는 약물이 중심구획으로 돌아올 수 없다.'
        ],
        answer: 2,
        explanation: '2구획모델에서 초기의 빠른 감소는 주로 분포 단계(α)와 관련되며, 후기의 완만한 감소는 소실 단계(β)와 관련된다.'
    },

    {
        id: 'pk13',
        subject: 'pk',
        week: 3,
        question: '어떤 약물의 혈장 농도가 Cp = 20e^(−1.0t) + 10e^(−0.1t)로 표현된다. 이 약물의 AUC는?',
        options: [
        '30 mg·h/L',
        '60 mg·h/L',
        '100 mg·h/L',
        '120 mg·h/L',
        '200 mg·h/L'
        ],
        answer: 3,
        explanation: 'AUC = A/α + B/β = 20/1.0 + 10/0.1 = 20 + 100 = 120 mg·h/L이다.'
    },

    {
        id: 'pk14',
        subject: 'pk',
        week: 3,
        question: '어떤 약물의 중심구획 분포용적 Vc = 10 L, k12 = 0.4 h⁻¹, k21 = 0.2 h⁻¹이다. 정상상태 분포용적 Vss는?',
        options: [
        '10 L',
        '20 L',
        '30 L',
        '40 L',
        '50 L'
        ],
        answer: 2,
        explanation: 'Vss = (1 + k12/k21) × Vc = (1 + 0.4/0.2) × 10 = 30 L이다.'
    },

    {
        id: 'pk15',
        subject: 'pk',
        week: 3,
        question: '비구획분석(Non-compartmental Analysis, NCA)에 대한 설명으로 옳은 것은?',
        options: [
        '반드시 2구획모델을 가정해야 한다.',
        '구획의 개수를 가정하지 않고 농도-시간 자료를 분석한다.',
        'AUC를 계산할 수 없다.',
        '정맥투여된 약물에만 적용할 수 있다.',
        '평균체류시간을 계산할 수 없다.'
        ],
        answer: 1,
        explanation: 'NCA는 특정 구획모델을 가정하지 않고 실제 농도-시간 자료를 이용하여 AUC, AUMC, MRT 등을 계산한다.'
    },


    // ==================== 7~8주차 ====================

    {
        id: 'pk16',
        subject: 'pk',
        week: 4,
        question: '어떤 약물의 반감기가 8시간이고 투여간격도 8시간이다. 1구획모델에서 반복 정맥투여할 때 축적비 RA는?',
        options: [
        '1',
        '1.5',
        '2',
        '3',
        '4'
        ],
        answer: 2,
        explanation: 'RA = 1/(1 − e^(−kτ))이다. 투여간격이 반감기와 같으면 e^(−kτ) = 0.5이므로 RA = 1/(1 − 0.5) = 2이다.'
    },

    {
        id: 'pk17',
        subject: 'pk',
        week: 4,
        question: '동일한 약물에 대해 투여간격 τ를 증가시켰을 때 나타나는 변화로 가장 적절한 것은? 단, 1구획모델의 반복 정맥투여를 가정한다.',
        options: [
        '축적비가 증가한다.',
        '정상상태 최고농도와 최저농도의 비가 감소한다.',
        '최고농도와 최저농도의 차이가 상대적으로 커진다.',
        '소실 속도상수가 증가한다.',
        '약물의 반감기가 감소한다.'
        ],
        answer: 2,
        explanation: '투여간격이 길어지면 다음 투여 전까지 더 많은 약물이 소실되므로 농도 변동이 커지고 축적비는 감소한다.'
    },

    {
        id: 'pk18',
        subject: 'pk',
        week: 4,
        question: '어떤 약물을 200 mg씩 8시간 간격으로 반복 정맥투여한다. 약물의 전신 청소율은 5 L/h이다. 평균 정상상태 농도는?',
        options: [
        '2 mg/L',
        '4 mg/L',
        '5 mg/L',
        '8 mg/L',
        '10 mg/L'
        ],
        answer: 2,
        explanation: 'Css,av = F × Dose/(CL × τ)이다. 정맥투여이므로 F = 1이며, 200/(5 × 8) = 5 mg/L이다.'
    },

    {
        id: 'pk19',
        subject: 'pk',
        week: 4,
        question: '1차 흡수 및 1차 소실을 따르는 경구투여 약물에서 소실 속도상수 k는 일정하고 흡수 속도상수 ka만 증가하였다. 일반적으로 나타나는 변화는?',
        options: [
        'tmax 증가, Cmax 감소',
        'tmax 감소, Cmax 증가',
        'tmax 증가, AUC 증가',
        'tmax 변화 없음, Cmax 감소',
        'AUC 감소, tmax 증가'
        ],
        answer: 1,
        explanation: '흡수가 빨라지면 최고농도에 더 빨리 도달하므로 tmax는 감소하고 Cmax는 증가한다. F와 CL이 일정하다면 AUC는 변하지 않는다.'
    },

    {
        id: 'pk20',
        subject: 'pk',
        week: 4,
        question: '어떤 경구투여 약물의 흡수 속도상수 ka = 1.0 h⁻¹, 소실 속도상수 k = 0.2 h⁻¹이다. 최고농도 도달 시간 tmax는 약 얼마인가?',
        options: [
        '0.5시간',
        '1.0시간',
        '2.0시간',
        '4.0시간',
        '8.0시간'
        ],
        answer: 2,
        explanation: 'tmax = ln(ka/k)/(ka − k) = ln(1.0/0.2)/(1.0 − 0.2) = ln(5)/0.8 ≈ 2.01시간이다.'
    },
    {
        id: 'p-pk1',
        subject: 'pk',
        week: 1,
        question: '어떤 약물 500 mg을 정맥투여한 직후 혈장 농도가 10 mg/L로 측정되었다. 겉보기 분포용적 Vd는?',
        options: [
        '5 L',
        '10 L',
        '25 L',
        '50 L',
        '100 L'
        ],
        answer: 3,
        explanation: 'Vd = Dose/Cp = 500/10 = 50 L이다. 단, 투여 직후 약물이 균일하게 분포한 1구획모델을 가정한다.'
    },

    {
        id: 'p-pk2',
        subject: 'pk',
        week: 1,
        question: '어떤 약물의 겉보기 분포용적이 실제 체액량보다 매우 크게 나타났다. 가장 적절한 설명은?',
        options: [
        '약물이 혈장에만 존재한다.',
        '약물이 조직에 많이 분포하여 혈장 농도가 상대적으로 낮다.',
        '약물이 체내에서 전혀 대사되지 않는다.',
        '약물의 생체이용률이 반드시 100%이다.',
        '약물이 신장에서만 제거된다.'
        ],
        answer: 1,
        explanation: '겉보기 분포용적은 실제 해부학적 부피가 아니다. 약물이 조직에 많이 분포하여 혈장 농도가 낮아지면 Vd가 크게 계산된다.'
    },

    {
        id: 'p-pk3',
        subject: 'pk',
        week: 1,
        question: '다음 중 혈장단백질과 약물의 결합에 대한 설명으로 옳은 것은?',
        options: [
        'Albumin은 주로 염기성 약물과 결합한다.',
        'α₁-Acid glycoprotein은 주로 산성 약물과 결합한다.',
        'Albumin은 주로 약산성 및 중성 약물과 결합한다.',
        '혈장단백질과 결합한 약물만 조직으로 자유롭게 이동한다.',
        '혈장단백질 농도는 약물의 유리형 분율에 영향을 주지 않는다.'
        ],
        answer: 2,
        explanation: 'Albumin은 주로 약산성·중성 약물과 결합하며, α₁-Acid glycoprotein은 주로 염기성 약물과 결합한다.'
    },

    {
        id: 'p-pk4',
        subject: 'pk',
        week: 1,
        question: '어떤 약물의 혈장 내 총농도는 20 mg/L이고, 유리형 약물의 농도는 4 mg/L이다. 유리형 분율 fu는?',
        options: [
        '0.1',
        '0.2',
        '0.4',
        '0.5',
        '0.8'
        ],
        answer: 1,
        explanation: 'fu = Cfree/Ctotal = 4/20 = 0.2이다. 전체 약물 중 20%가 유리형으로 존재한다.'
    },

    {
        id: 'p-pk5',
        subject: 'pk',
        week: 1,
        question: '신장질환으로 혈장 Albumin 농도가 감소하였다. 다른 조건이 일정하고 조직 결합이 변하지 않는다면, Albumin에 결합하는 약물의 분포용적은 어떻게 변화할 가능성이 높은가?',
        options: [
        '유리형 분율이 감소하여 Vd가 감소한다.',
        '유리형 분율이 증가하여 Vd가 증가한다.',
        '단백질 결합이 증가하여 Vd가 증가한다.',
        '혈장단백질 농도와 Vd는 관계가 없다.',
        '모든 약물에서 Vd가 반드시 감소한다.'
        ],
        answer: 1,
        explanation: 'Albumin 감소 → 혈장단백질 결합 감소 → 유리형 분율 증가 → 조직 분포 증가 → Vd 증가가 가능하다.'
    },


    // ==================== 3~4주차 ====================

    {
        id: 'p-pk6',
        subject: 'pk',
        week: 2,
        question: '어떤 약물의 전신 청소율이 10 L/h이고, 투여량의 40%가 변화되지 않은 형태로 소변으로 배설된다. 신장 청소율은?',
        options: [
        '2 L/h',
        '4 L/h',
        '5 L/h',
        '6 L/h',
        '8 L/h'
        ],
        answer: 1,
        explanation: 'CLR = fe × CLT = 0.4 × 10 = 4 L/h이다.'
    },

    {
        id: 'p-pk7',
        subject: 'pk',
        week: 2,
        question: 'GFR이 120 mL/min이고 약물의 유리형 분율이 0.25이다. 사구체 여과에 의한 청소율은?',
        options: [
        '15 mL/min',
        '20 mL/min',
        '30 mL/min',
        '60 mL/min',
        '120 mL/min'
        ],
        answer: 2,
        explanation: 'CLRF = GFR × fu = 120 × 0.25 = 30 mL/min이다. 사구체에서는 주로 유리형 약물이 여과된다.'
    },

    {
        id: 'p-pk8',
        subject: 'pk',
        week: 2,
        question: '신장의 능동적 세뇨관 분비(Active tubular secretion)에 대한 설명으로 옳지 않은 것은?',
        options: [
        '수송체를 이용한다.',
        '수송체 포화가 발생할 수 있다.',
        '구조적으로 유사한 약물 사이에 경쟁이 발생할 수 있다.',
        '약물의 혈장단백질 결합률에 의해서만 분비 속도가 결정된다.',
        '경쟁적 억제로 약물의 신장 배설이 감소할 수 있다.'
        ],
        answer: 3,
        explanation: '능동적 분비는 수송체를 이용하며, 단백질 결합 약물도 해리되어 분비될 수 있다. 따라서 단백질 결합률만으로 분비 속도가 결정되지는 않는다.'
    },

    {
        id: 'p-pk9',
        subject: 'pk',
        week: 2,
        question: '약염기성 약물의 신장 배설을 증가시키기 위한 방법으로 가장 적절한 것은?',
        options: [
        '소변 pH를 증가시킨다.',
        '소변 pH를 감소시킨다.',
        '약물의 지용성을 증가시킨다.',
        '약물의 비이온화형 비율을 증가시킨다.',
        '세뇨관 재흡수를 증가시킨다.'
        ],
        answer: 1,
        explanation: '약염기성 약물은 산성 소변에서 BH⁺ 형태가 증가한다. 이온화형은 수동 재흡수가 어려우므로 신장 배설이 증가한다.'
    },

    {
        id: 'p-pk10',
        subject: 'pk',
        week: 2,
        question: 'Urinary Excretion Rate Plot에서 1차 소실 속도상수 k를 구하기 위해 사용하는 그래프의 축과 기울기로 옳은 것은?',
        options: [
        'x축 실제 시간, y축 Ae, 기울기 k',
        'x축 실제 시간, y축 log Cp, 기울기 k/2.303',
        'x축 구간 중간 시간, y축 log(ΔAe/Δt), 기울기 −k/2.303',
        'x축 누적 배설량, y축 시간, 기울기 −k',
        'x축 혈장 농도, y축 배설속도, 기울기 1/k'
        ],
        answer: 2,
        explanation: '요중배설속도법은 각 채뇨 구간의 중간 시간과 배설속도를 이용한다. 기울기는 −k/2.303이다.'
    },


    // ==================== 5~6주차 ====================

    {
        id: 'p-pk11',
        subject: 'pk',
        week: 3,
        question: '어떤 약물의 AUC가 50 mg·h/L, AUMC가 200 mg·h²/L이다. 평균체류시간(MRT)은?',
        options: [
        '2시간',
        '3시간',
        '4시간',
        '5시간',
        '8시간'
        ],
        answer: 2,
        explanation: 'MRT = AUMC/AUC = 200/50 = 4시간이다.'
    },

    {
        id: 'p-pk12',
        subject: 'pk',
        week: 3,
        question: '어떤 약물을 40 mg/h의 일정한 속도로 정맥 점적투여한다. 약물의 전신 청소율은 5 L/h이다. 정상상태 혈장 농도 Css는?',
        options: [
        '2 mg/L',
        '4 mg/L',
        '6 mg/L',
        '8 mg/L',
        '10 mg/L'
        ],
        answer: 3,
        explanation: 'Css = k₀/CL = 40/5 = 8 mg/L이다.'
    },

    {
        id: 'p-pk13',
        subject: 'pk',
        week: 3,
        question: '1차 소실을 따르는 약물의 반감기가 6시간이다. 일정 속도로 점적투여할 때 정상상태 농도의 약 93.75%에 도달하는 시간은?',
        options: [
        '6시간',
        '12시간',
        '18시간',
        '24시간',
        '42시간'
        ],
        answer: 3,
        explanation: '반감기 4회가 지나면 정상상태 농도의 93.75%에 도달한다. 6 × 4 = 24시간이다.'
    },

    {
        id: 'p-pk14',
        subject: 'pk',
        week: 3,
        question: '어떤 약물의 목표 정상상태 농도가 10 mg/L이고 분포용적이 30 L이다. 목표 농도에 즉시 도달하기 위한 정맥 부하용량은?',
        options: [
        '100 mg',
        '150 mg',
        '200 mg',
        '300 mg',
        '600 mg'
        ],
        answer: 3,
        explanation: 'DL = Ctarget × Vd = 10 × 30 = 300 mg이다.'
    },

    {
        id: 'p-pk15',
        subject: 'pk',
        week: 3,
        question: '1구획모델에서 일정한 용량을 일정한 투여간격으로 반복 정맥투여할 때, 두 번째 투여 직후의 혈중 농도는?',
        options: [
        '첫 번째 투여 직후 농도와 항상 같다.',
        '첫 번째 투여 직후 농도의 절반이다.',
        '첫 번째 투여 후 남아 있는 농도에 새로 투여한 약물의 농도가 더해진다.',
        '첫 번째 투여 후 남아 있는 약물은 모두 제거된다.',
        '두 번째 투여부터는 약물의 소실이 발생하지 않는다.'
        ],
        answer: 2,
        explanation: '반복투여에서는 이전 투여량 중 체내에 남아 있는 약물과 새로 투여한 약물이 중첩되어 축적이 발생한다.'
    },


    // ==================== 7~8주차 ====================

    {
        id: 'p-pk16',
        subject: 'pk',
        week: 4,
        question: 'Flip-Flop kinetics에 대한 설명으로 가장 적절한 것은?',
        options: [
        '흡수 속도상수가 소실 속도상수보다 항상 크다.',
        '흡수가 소실보다 느려 말단 혈중 농도 감소가 흡수 속도에 의해 지배될 수 있다.',
        '약물의 흡수가 완전히 중단된 상태를 의미한다.',
        '약물의 생체이용률이 반드시 100%가 된다.',
        '약물의 소실이 0차 속도로 전환되는 현상이다.'
        ],
        answer: 1,
        explanation: '일반적으로 ka > k이지만, Flip-Flop에서는 ka < k가 되어 말단 농도 감소가 흡수 과정에 의해 지배될 수 있다.'
    },

    {
        id: 'p-pk17',
        subject: 'pk',
        week: 4,
        question: 'Wagner–Nelson Method에 대한 설명으로 옳은 것은?',
        options: [
        '2구획모델에서만 사용할 수 있다.',
        '약물의 신장 청소율을 직접 측정하는 방법이다.',
        '시간에 따른 흡수분율을 계산하는 데 이용된다.',
        '혈장단백질 결합상수를 구하는 방법이다.',
        '약물의 생물학적동등성을 판정하는 통계적 검정법이다.'
        ],
        answer: 2,
        explanation: 'Wagner–Nelson Method는 선형 소실을 따르는 1구획모델에서 시간에 따른 흡수분율 FA를 계산하는 방법이다.'
    },

    {
        id: 'p-pk18',
        subject: 'pk',
        week: 4,
        question: '어떤 약물을 경구로 200 mg 투여했을 때 AUC는 40 mg·h/L였다. 동일 약물을 정맥으로 100 mg 투여했을 때 AUC는 50 mg·h/L였다. 절대 생체이용률은?',
        options: [
        '20%',
        '30%',
        '40%',
        '50%',
        '80%'
        ],
        answer: 2,
        explanation: 'F = (AUCpo × Doseiv)/(AUCiv × Dosepo) = (40 × 100)/(50 × 200) = 0.4 = 40%이다.'
    },

    {
        id: 'p-pk19',
        subject: 'pk',
        week: 4,
        question: '동일한 용량으로 투여한 시험제제(Test)의 AUC가 90 mg·h/L이고, 대조제제(Reference)의 AUC가 100 mg·h/L이다. 상대 생체이용률은?',
        options: [
        '80%',
        '85%',
        '90%',
        '100%',
        '110%'
        ],
        answer: 2,
        explanation: 'Frelative = AUCtest/AUCreference = 90/100 = 0.9 = 90%이다.'
    },

    {
        id: 'p-pk20',
        subject: 'pk',
        week: 4,
        question: '두 제제의 생물학적동등성을 평가할 때, 일반적인 AUC 및 Cmax 평가 기준에 대한 설명으로 가장 적절한 것은?',
        options: [
        '시험제제와 대조제제의 AUC가 완전히 동일해야 한다.',
        '시험제제의 AUC가 대조제제보다 반드시 높아야 한다.',
        '로그 변환 자료에 기초한 시험제제/대조제제 기하평균비의 90% 신뢰구간이 80~125% 범위에 포함되어야 한다.',
        '두 제제의 반감기가 같으면 자동으로 생물학적동등성이 인정된다.',
        '두 제제의 tmax가 같으면 자동으로 생물학적동등성이 인정된다.'
        ],
        answer: 2,
        explanation: '일반적인 생물학적동등성 평가에서는 AUC와 Cmax의 기하평균비에 대한 90% 신뢰구간이 80.00~125.00% 범위에 포함되는지 평가한다.'
    }
].map(q=>({...q,mode:'rank'}));