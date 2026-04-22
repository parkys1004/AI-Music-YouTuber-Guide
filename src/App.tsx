import React, { useState, useEffect } from 'react';
import { 
  Youtube, 
  Music, 
  Video, 
  Coins, 
  Sparkles,
  Lightbulb,
  ArrowRightCircle,
  CheckCircle2,
  Gamepad2,
  ArrowLeft,
  BookOpen,
  FileText
} from 'lucide-react';

const App = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // 페이지 이동 시 상단 스크롤
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeStep]);

  const steps = [
    {
      step: "STEP 01",
      title: "내 채널 문 열기",
      subtitle: "준비 단계",
      icon: <Youtube className="w-6 h-6 sm:w-8 sm:h-8 text-slate-700" />,
      description: "어떤 음악을 올릴지 결정하고 유튜브에 내 가게를 차리는 과정이에요.",
      color: "border-slate-200 border-l-[6px] border-l-red-500",
      tasks: [
        "내가 좋아하는 음악 장르 딱 하나 정하기",
        "AI로 채널 이름과 멋진 프로필 사진 만들기",
        "유튜브 브랜드 계정(가게) 개설하기"
      ],
      tools: "유튜브, 쳇지피티, 제미나이",
      taskDetails: [
        { 
          title: "내가 좋아하는 음악 장르 딱 하나 정하기", 
          detail: (
            <div className="space-y-4">
              <p>유튜브 알고리즘은 <strong>'전문성'</strong>을 좋아합니다. 이것저것 올리는 것보다 한 우물만 파는 것이 성장에 훨씬 유리합니다. 아래 순서대로 장르를 결정해 보세요.</p>
              <ul className="space-y-3 mt-2">
                <li className="flex items-start gap-2 text-slate-700">
                  <span className="text-blue-500 font-bold mt-0.5">✓</span> 
                  <div><strong className="text-slate-800">취향 분석:</strong> 평소 가장 많이 듣거나, 재생 목록에 가장 많이 담긴 장르를 확인하세요. <span className="text-slate-500">(예: 로파이, 시티팝, K-Pop, 재즈 등)</span></div>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <span className="text-blue-500 font-bold mt-0.5">✓</span> 
                  <div><strong className="text-slate-800">지속 가능성:</strong> 내가 1년 동안 매주 한 번씩 업로드해도 질리지 않을 장르여야 합니다.</div>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <span className="text-blue-500 font-bold mt-0.5">✓</span> 
                  <div><strong className="text-slate-800">타겟 설정:</strong> '공부할 때 듣기 좋은 로파이(Lo-fi)', '퇴근길 위로가 되는 인디 음악'처럼 구체적인 상황을 덧붙이면 장르 정하기가 훨씬 쉬워집니다.</div>
                </li>
              </ul>
            </div>
          )
        },
        { 
          title: "AI로 채널 이름 짓기", 
          detail: (
            <div className="space-y-4">
              <p>이름은 기억하기 쉽고(2~5글자), 장르의 느낌이 잘 전달되어야 합니다. AI(챗봇)에게 다음과 같이 질문(프롬프트)해 보세요.</p>
              <div className="bg-slate-800 text-slate-200 p-4 sm:p-5 rounded-2xl text-sm md:text-base font-mono leading-relaxed my-3 shadow-inner break-keep">
                <span className="text-blue-400 block mb-2 font-bold">[프롬프트 예시]</span>
                "내가 정한 장르는 [로파이]야. 퇴근길 지친 사람들에게 위로를 주는 느낌의 세련된 유튜브 채널 이름을 한국어와 영어 믹스해서 5개만 추천해 줘."
              </div>
              <div className="bg-blue-50 border border-blue-100 p-3 sm:p-4 rounded-xl flex gap-3 text-blue-800 text-sm sm:text-base shadow-sm break-keep">
                <span className="text-xl shrink-0">💡</span>
                <p><strong className="font-bold">팁:</strong> 이름에 'Sound', 'Vibe', 'Record', 'Mood' 같은 단어를 섞으면 음악 채널 느낌이 확 살아납니다.</p>
              </div>
            </div>
          )
        },
        { 
          title: "멋진 프로필 사진 기획하기 (이미지 생성 가이드)", 
          detail: (
            <div className="space-y-4">
              <p>비록 지금 이미지를 직접 만들지는 않지만, 나중에 AI 이미지 생성 도구(Midjourney, DALL-E 등)를 사용하실 때 아래 <strong>'치트키 문구'</strong>를 넣으면 멋진 결과물이 나옵니다.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-2">
                <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex flex-col gap-2">
                  <strong className="text-emerald-600 flex items-center gap-2"><span className="text-lg">🎨</span> 감성적인 느낌</strong>
                  <code className="text-slate-600 text-sm bg-slate-50 p-2 sm:p-3 rounded-lg block leading-relaxed border border-slate-100 break-all shrink-0">
                    "Lofi aesthetic, retro anime style, cozy room with neon lights, high resolution."
                  </code>
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex flex-col gap-2">
                  <strong className="text-indigo-600 flex items-center gap-2"><span className="text-lg">✨</span> 세련된 느낌</strong>
                  <code className="text-slate-600 text-sm bg-slate-50 p-2 sm:p-3 rounded-lg block leading-relaxed border border-slate-100 break-all shrink-0">
                    "Minimalist vector logo, music note icon, gold and black theme, luxury design."
                  </code>
                </div>
              </div>
              <div className="bg-orange-50 text-orange-900 p-3 sm:p-4 rounded-xl text-sm sm:text-base mt-2 flex items-start gap-3 border border-orange-100 shadow-sm break-keep">
                <span className="text-xl shrink-0">⚠️</span>
                <p><strong className="font-bold">주의사항:</strong> 프로필 사진은 동그란 원 안에 들어가므로, 중요한 피사체가 정중앙에 오도록 설명하는 것이 핵심입니다.</p>
              </div>
            </div>
          )
        },
        { 
          title: "유튜브 브랜드 계정 개설하기 (5단계)", 
          detail: (
            <div className="space-y-4">
              <p>일반 개인 계정보다 <strong>'브랜드 계정'</strong>을 만들어야 나중에 채널 이름을 자유롭게 바꾸고, 여러 명이 관리하기 좋습니다.</p>
              <ol className="list-decimal ml-6 space-y-2.5 mt-4 text-slate-700 marker:text-slate-400 marker:font-bold break-keep">
                <li><strong className="text-slate-800">로그인:</strong> 구글 계정으로 유튜브에 접속합니다.</li>
                <li><strong className="text-slate-800">설정 진입:</strong> 오른쪽 상단 [프로필 사진] 클릭 → [설정] 클릭.</li>
                <li><strong className="text-slate-800">채널 추가:</strong> 중간에 있는 <span className="underline decoration-slate-300 underline-offset-4 font-semibold">[채널 추가 또는 관리]</span> 메뉴를 누릅니다.</li>
                <li><strong className="text-slate-800">채널 만들기:</strong> <span className="underline decoration-slate-300 underline-offset-4 font-semibold">[+ 채널 만들기]</span> 버튼을 클릭합니다.</li>
                <li><strong className="text-slate-800">이름 입력:</strong> AI가 추천해 준 '브랜드 채널 이름'을 입력하고 만들기를 누르면 끝!</li>
              </ol>
            </div>
          )
        },
        {
          title: "보너스 꿀팁: 채널 세팅 마무리",
          detail: (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-5 sm:p-6 rounded-2xl shadow-sm">
              <h5 className="font-black text-amber-900 mb-3 flex items-center gap-2 text-lg">
                <span className="text-2xl">💡</span> 기본 정보 입력하기
              </h5>
              <p className="text-amber-900/90 leading-relaxed mb-5 break-keep font-medium">
                채널을 만든 후에는 <strong className="text-amber-950">'채널 맞춤설정'</strong>에서 <strong className="text-amber-950">'기본 정보'</strong> 란에 내 채널이 어떤 음악을 들려주는 곳인지 2~3문장으로 꼭 적어주세요. 시청자가 구독을 누르는 결정적인 이유가 됩니다.
              </p>
              <div className="bg-white/60 p-4 rounded-xl border border-amber-200/50">
                <p className="text-amber-800 font-bold italic text-sm sm:text-base break-keep text-center">
                  "혹시 AI가 추천해 줄 만한 채널 이름 아이디어가 더 필요하신가요? <br className="hidden sm:block" /> 구체적인 음악 장르를 말씀해 주시면 바로 뽑아 드릴게요!"
                </p>
              </div>
            </div>
          )
        }
      ]
    },
    {
      step: "STEP 02",
      title: "AI로 음악 뚝딱 만들기",
      subtitle: "제작 단계",
      icon: <Music className="w-6 h-6 sm:w-8 sm:h-8 text-slate-700" />,
      description: "악기를 다룰 줄 몰라도 괜찮아요. AI에게 말만 하면 음악이 완성됩니다.",
      color: "border-slate-200 border-l-[6px] border-l-blue-500",
      tasks: [
        "Suno AI 유료 결제하기 (수익 창출 필수!)",
        "원하는 분위기를 글로 써서 음악 만들기",
        "좋은 노래들만 골라서 한 시간 분량 뽑기"
      ],
      tools: "Suno AI, 방구석작곡가 웹앱",
      taskDetails: [
        { 
          title: "1. Suno AI 유료 결제하기 (수익 창출 필수!)", 
          detail: (
            <div className="space-y-4">
              <p>Suno AI에서 만든 음악으로 유튜브 수익을 창출하려면 <strong>반드시 유료 플랜(Pro 또는 Premier)</strong>을 구독해야 합니다. 무료 버전은 상업적 이용이 불가능하기 때문입니다.</p>
              <div className="mt-3">
                <strong className="text-slate-800 text-lg flex items-center gap-2"><span className="text-xl">💳</span> 결제 방법:</strong>
                <ol className="list-decimal ml-6 space-y-2.5 mt-3 text-slate-700 marker:text-slate-400 marker:font-bold break-keep">
                  <li>Suno AI 홈페이지 왼쪽 하단의 <strong className="text-slate-800">'Subscription(구독)'</strong> 또는 <strong className="text-slate-800">'Upgrade'</strong> 버튼을 클릭합니다.</li>
                  <li><strong className="text-slate-800">Pro Plan($10/월)</strong> 또는 <strong className="text-slate-800">Premier Plan($30/월)</strong> 중 하나를 선택합니다. <span className="text-slate-500">(한 달만 해보고 싶다면 월간 결제로 진행하세요.)</span></li>
                  <li>해외 결제가 가능한 카드 정보를 입력하고 결제를 완료합니다.</li>
                </ol>
              </div>
              <div className="bg-red-50 text-red-900 p-3 sm:p-4 rounded-xl text-sm sm:text-base mt-4 flex items-start gap-3 border border-red-100 shadow-sm break-keep">
                <span className="text-xl shrink-0">🚨</span>
                <p><strong className="font-bold">주의사항:</strong> 반드시 <strong className="underline decoration-red-300 underline-offset-4">결제한 시점 이후에 생성된 곡</strong>들만 상업적 권리(수익 창출권)를 가집니다. 이전 무료 버전일 때 만든 곡은 유료 결제를 해도 소급 적용되지 않으니 새로 생성해야 합니다.</p>
              </div>
            </div>
          )
        },
        { 
          title: "2. 원하는 분위기를 글로 써서 음악 만들기 (Prompt 활용)", 
          detail: (
            <div className="space-y-4">
              <p>Suno AI의 <strong>'Custom Mode'</strong>를 활용하면 훨씬 정교한 음악을 만들 수 있습니다.</p>
              <div className="mt-3">
                <strong className="text-slate-800 text-lg flex items-center gap-2"><span className="text-xl">📝</span> 작업 순서:</strong>
                <ol className="list-decimal ml-6 space-y-3 mt-3 text-slate-700 marker:text-slate-400 marker:font-bold break-keep">
                  <li><strong className="text-slate-800">Custom Mode 켜기:</strong> Create 메뉴에서 'Custom Mode' 스위치를 켭니다.</li>
                  <li><strong className="text-slate-800">Lyrics(가사):</strong> 가사가 없는 연주곡을 원하면 <strong className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded ml-1 border border-blue-100">[Instrumental]</strong> 버튼을 누르세요.</li>
                  <li>
                    <strong className="text-slate-800">Style of Music(장르 및 분위기):</strong> 여기에 원하는 느낌을 영어 키워드로 넣습니다.
                    <p className="text-sm text-slate-500 mt-1.5 italic bg-slate-100/50 p-2 rounded inline-block">* 예: Lofi, Chill, Relaxing, 80bpm, Dreamy piano, Lo-fi hip hop</p>
                  </li>
                  <li><strong className="text-slate-800">Title:</strong> 곡의 제목을 정합니다.</li>
                </ol>
              </div>
              <div className="bg-blue-50 border border-blue-100 p-4 sm:p-5 rounded-xl flex gap-3 text-blue-800 text-sm sm:text-base shadow-sm break-keep mt-5">
                <span className="text-xl shrink-0">💡</span>
                <p><strong className="font-bold">꿀팁:</strong> "비 오는 날 카페에서 듣기 좋은 차분한 재즈"라고 쓰고 싶다면 파파고나 구글 번역기를 이용해 <strong className="text-indigo-700 bg-white/50 px-1 py-0.5 rounded">"Chill jazz, rainy day cafe mood, soft piano, slow tempo"</strong> 처럼 단어 위주로 입력하는 것이 결과가 더 좋습니다.</p>
              </div>
            </div>
          )
        },
        { 
          title: "3. 좋은 노래들만 골라서 한 시간 분량 뽑기", 
          detail: (
            <div className="space-y-4">
              <p>유튜브 '플레이리스트' 영상은 보통 1시간 정도가 적당합니다. Suno AI는 한 번에 2분 내외의 곡을 생성하므로, 여러 곡을 합치는 과정이 필요합니다.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <strong className="text-slate-800 text-lg flex items-center gap-2 mb-3"><span className="text-xl">🎶</span> 곡 모으기:</strong>
                  <ul className="list-disc ml-5 space-y-2 text-slate-700 marker:text-slate-400 break-keep">
                    <li>생성된 곡 중 맘에 드는 곡을 <strong>Download(MP3)</strong> 합니다.</li>
                    <li>한 시간 분량을 채우려면 약 20~30곡 정도의 좋은 곡을 선별해야 합니다.</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <strong className="text-slate-800 text-lg flex items-center gap-2 mb-3"><span className="text-xl">✂️</span> 영상 편집기로 합치기:</strong>
                  <ol className="list-decimal ml-5 space-y-2 text-slate-700 marker:text-slate-400 marker:font-bold break-keep">
                    <li>무료 편집 프로그램(예: <strong>캡컷 PC버전</strong>)을 실행합니다.</li>
                    <li>선별한 음악 파일들을 모두 불러와 타임라인에 순서대로 배치합니다.</li>
                    <li><strong className="text-blue-600">'오디오 페이드 아웃/인'</strong> 기능을 사용해 곡과 곡 사이가 자연스럽게 연결되도록 조절합니다.</li>
                    <li>배경으로 쓸 영상/이미지를 음악 길이에 맞춰 길게 늘려줍니다.</li>
                    <li><strong>내보내기(Export)</strong>를 눌러 하나의 영상 파일로 만들면 끝!</li>
                  </ol>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "보너스 꿀팁: 저작권 관리 노하우",
          detail: (
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 p-5 sm:p-6 rounded-2xl shadow-sm">
              <h5 className="font-black text-indigo-900 mb-3 flex items-center gap-2 text-lg">
                <span className="text-2xl">🛡️</span> 저작권 상태 관리하기
              </h5>
              <p className="text-indigo-900/90 leading-relaxed mb-5 break-keep font-medium">
                수익 창출을 위해서는 유튜브 스튜디오에서 <strong>'저작권'</strong> 상태를 늘 확인하세요. Suno AI 유료 플랜은 저작권을 본인이 소유하므로 문제가 없지만, 혹시라도 잘못된 저작권 신고(Content ID)가 들어오면 Suno 측의 구독 증명서를 통해 이의 제기를 할 수 있습니다. 
              </p>
              <div className="bg-white/60 p-4 rounded-xl border border-indigo-200/50">
                <p className="text-indigo-800 font-bold italic text-sm sm:text-base break-keep text-center">
                  "이제 멋진 음악들을 모아 첫 번째 플레이리스트를 업로드해 보세요! <br className="hidden sm:block" /> 다른 궁금한 점이 있으면 언제든 물어봐 주세요."
                </p>
              </div>
            </div>
          )
        }
      ]
    },
    {
      step: "STEP 03",
      title: "예쁜 영상 입히기",
      subtitle: "디자인 단계",
      icon: <Video className="w-6 h-6 sm:w-8 sm:h-8 text-slate-700" />,
      description: "음악만 나오면 심심하겠죠? 눈이 즐거운 배경 영상을 더해줍니다.",
      color: "border-slate-200 border-l-[6px] border-l-emerald-500",
      tasks: [
        "저작권 걱정 없는 무료 영상 다운로드",
        "캡컷(CapCut)으로 음악과 영상 합치기",
        "노래 제목이 멋지게 나오는 자막 넣기"
      ],
      tools: "CapCut, 웹앱",
      taskDetails: [
        { 
          title: "1. 저작권 걱정 없는 무료 영상 다운로드", 
          detail: (
            <div className="space-y-4">
              <p>음악 채널의 완성도를 결정짓는 <strong>영상 편집 단계</strong>입니다. 저작권 문제없이 안전하게, 그리고 캡컷을 활용해 전문적인 플레이리스트 영상을 만드는 방법을 아주 쉽게 설명해 드릴게요. 음악과 어울리는 고화질 배경 영상은 아래 사이트에서 무료로 구할 수 있습니다.</p>
              <div className="mt-3">
                <strong className="text-slate-800 text-lg flex items-center gap-2"><span className="text-xl">🌐</span> 다운로드 방법:</strong>
                <ul className="list-disc ml-5 space-y-2 mt-2 text-slate-700 marker:text-slate-400 break-keep">
                  <li><strong className="text-slate-800">추천 사이트:</strong> <strong>Pexels(펙셀스)</strong> 또는 <strong>Pixabay(픽사베이)</strong></li>
                  <li>사이트 검색창에 원하는 분위기를 영어로 검색합니다. <span className="text-slate-500">(예: <code>Lo-fi</code>, <code>Nature</code>, <code>City night</code>, <code>Rainy window</code>)</span></li>
                  <li>검색 필터에서 <strong className="text-slate-800">'동영상'</strong>을 선택합니다.</li>
                  <li>영상 위에 마우스를 올렸을 때 '무료 사용' 혹은 'Free to use'라고 적힌 영상을 확인합니다.</li>
                  <li><strong className="text-blue-600 font-semibold">'무료 다운로드'</strong>를 눌러 가장 높은 화질(최소 1080p 이상)로 저장합니다.</li>
                </ul>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex gap-3 text-emerald-800 text-sm sm:text-base shadow-sm break-keep mt-4">
                <span className="text-xl shrink-0">💡</span>
                <p><strong className="font-bold">꿀팁:</strong> 플레이리스트 영상은 화면 변화가 적고 차분한 <strong className="bg-white/60 px-1.5 py-0.5 rounded text-emerald-900 border border-emerald-200">루프(Loop) 영상</strong>이 시청자의 몰입을 방해하지 않아 인기가 많습니다.</p>
              </div>
            </div>
          )
        },
        { 
          title: "2. 캡컷(CapCut)으로 음악과 영상 합치기", 
          detail: (
            <div className="space-y-4">
              <p>컴퓨터나 모바일에서 캡컷을 실행하고 다음 순서대로 따라 하세요.</p>
              <div className="mt-3">
                <ol className="list-decimal ml-6 space-y-3 text-slate-700 marker:text-slate-400 marker:font-bold break-keep">
                  <li><strong className="text-slate-800">새 프로젝트 시작:</strong> <code>[새 프로젝트]</code>를 누르고 다운로드한 배경 영상과 Suno AI로 만든 음악 파일들을 모두 불러옵니다(Import).</li>
                  <li><strong className="text-slate-800">영상 배치:</strong> 불러온 영상을 아래쪽 타임라인(편집 창)으로 끌어다 놓습니다. 영상 길이가 짧다면, 영상을 클릭하고 <strong className="bg-slate-100 px-1 py-0.5 rounded border border-slate-200 text-slate-800">복사(Ctrl+C) - 붙여넣기(Ctrl+V)</strong>를 반복해 음악 전체 길이에 맞춰 늘려줍니다.</li>
                  <li><strong className="text-slate-800">음악 배치:</strong> 배경 영상 바로 아래 줄에 음악 파일들을 순서대로 배치합니다.</li>
                  <li><strong className="text-slate-800">자연스러운 연결:</strong> 음악과 음악 사이가 겹치는 부분에서 앞 곡은 서서히 작아지게(<strong className="text-emerald-600">페이드 아웃</strong>), 뒷 곡은 서서히 커지게(<strong className="text-emerald-600">페이드 인</strong>) 설정하면 훨씬 부드럽게 들립니다. <span className="text-slate-500">(캡컷의 '오디오' 메뉴 내 '페이드' 기능 활용)</span></li>
                </ol>
              </div>
            </div>
          )
        },
        { 
          title: "3. 노래 제목이 멋지게 나오는 자막 넣기", 
          detail: (
            <div className="space-y-4">
              <p>시청자들은 지금 나오는 노래 제목이 무엇인지 궁금해합니다. 세련되게 자막을 넣어보세요.</p>
              <div className="mt-3">
                <ol className="list-decimal ml-6 space-y-3 text-slate-700 marker:text-slate-400 marker:font-bold break-keep">
                  <li><strong className="text-slate-800">텍스트 입력:</strong> 캡컷 상단의 <code>[텍스트]</code> &rarr; <code>[기본 텍스트]</code>를 타임라인으로 끌어옵니다.</li>
                  <li><strong className="text-slate-800">내용 적기:</strong> "01. Song Title - Artist" 형식으로 노래 정보를 입력합니다.</li>
                  <li>
                    <strong className="text-slate-800">디자인 꾸미기 (중요):</strong>
                    <ul className="list-disc ml-6 mt-2 space-y-1.5 marker:text-slate-300">
                      <li><strong className="text-slate-700">폰트:</strong> 가독성이 좋으면서도 감성적인 폰트를 선택합니다. (무료 폰트 중 'Pretendard'나 명조체 계열 추천)</li>
                      <li><strong className="text-slate-700">위치:</strong> 화면 왼쪽 하단이나 오른쪽 상단에 작게 배치하는 것이 세련되어 보입니다.</li>
                      <li><strong className="text-slate-700">애니메이션:</strong> 텍스트를 클릭하고 <code>[애니메이션]</code> 메뉴에서 <strong className="text-indigo-500 bg-indigo-50 px-1 py-0.5 rounded">'페이드(Fade)'</strong>나 <strong className="text-indigo-500 bg-indigo-50 px-1 py-0.5 rounded">'타자기(Typewriter)'</strong> 효과를 주면 노래가 시작될 때 멋지게 나타납니다.</li>
                    </ul>
                  </li>
                  <li><strong className="text-slate-800">구간 맞추기:</strong> 자막의 길이를 타임라인에서 조절하여 해당 노래가 나오는 구간에만 딱 맞춰 표시되게 합니다.</li>
                </ol>
              </div>
            </div>
          )
        },
        {
          title: "보너스 꿀팁: 마지막 체크리스트 & 내보내기",
          detail: (
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 p-5 sm:p-6 rounded-2xl shadow-sm">
              <h5 className="font-black text-emerald-900 mb-4 flex items-center gap-2 text-lg">
                <span className="text-2xl">✅</span> 마지막 체크리스트
              </h5>
              <ul className="list-disc ml-5 space-y-3 text-emerald-900/90 leading-relaxed mb-6 break-keep font-medium marker:text-emerald-400">
                <li>영상 오른쪽 하단에 본인의 채널 로고나 이름을 <strong>연하게(투명도 조절)</strong> 넣어두면 다른 사람이 영상을 무단으로 가져가는 것을 방지할 수 있습니다.</li>
                <li>모든 편집이 끝났다면 오른쪽 상단 <strong className="bg-emerald-600 text-white px-2 py-0.5 rounded shadow-sm">[내보내기]</strong>를 눌러 <strong className="text-emerald-800 bg-white/60 px-1.5 py-0.5 rounded border border-emerald-200">해상도 1080p, 프레임 30fps</strong> 설정으로 저장하여 유튜브에 업로드하세요!</li>
              </ul>
              <div className="bg-white/60 p-4 rounded-xl border border-emerald-200/50">
                <p className="text-emerald-800 font-bold italic text-sm sm:text-base break-keep text-center">
                  "이제 모든 준비가 끝났습니다. 멋진 첫 번째 플레이리스트 영상을 기대하겠습니다! <br className="hidden sm:block" /> 다른 도움이 필요하시면 말씀해 주세요."
                </p>
              </div>
            </div>
          )
        }
      ]
    },
    {
      step: "STEP 04",
      title: "돈 버는 채널 만들기",
      subtitle: "운영 단계",
      icon: <Coins className="w-6 h-6 sm:w-8 sm:h-8 text-slate-700" />,
      description: "내 영상을 사람들이 많이 보게 하고 실제 수익으로 연결합니다.",
      color: "border-slate-200 border-l-[6px] border-l-amber-500",
      tasks: [
        "사람들이 검색할만한 제목으로 올리기",
        "클릭하고 싶게 만드는 썸네일(표지) 제작",
        "구독자 1,000명 달성을 위한 짧은 영상 올리기"
      ],
      tools: "유튜브 스튜디오, Canva",
      taskDetails: [
        { 
          title: "사람들이 검색할만한 제목으로 올리기", 
          detail: "'분위기 좋은 AI 음악'처럼 모호한 제목보다는 '과제할 때 듣기 좋은 따뜻한 로파이 플레이리스트 1시간' 처럼 특정 상황(공부, 수면, 드라이브)과 타겟이 명확히 담긴 검색 친화적(SEO) 제목을 사용하세요." 
        },
        { 
          title: "클릭하고 싶게 만드는 썸네일(표지) 제작", 
          detail: "Canva 등의 디자인 툴에서 제공하는 무료 유튜브 썸네일 템플릿을 활용해 보세요. 고해상도 감성 이미지 위에 굵직하고 잘 읽히는 폰트로 핵심 키워드 1줄만 강조하는 것이 가장 클릭률이 높습니다." 
        },
        { 
          title: "구독자 1,000명 달성을 위한 짧은 영상 올리기", 
          detail: "만든 1시간짜리 본 영상 중에서 가장 하이라이트가 되는 30~60초 길이의 구간을 세로 숏폼(YouTube Shorts) 포맷으로 재편집하여 업로드하세요. 쇼츠 노출 알고리즘을 타면 초기 구독자를 폭발적으로 늘릴 수 있습니다." 
        }
      ]
    }
  ];

  /* -----------------------------------------------------
   * 상세 가이드(Details) 뷰
   * ----------------------------------------------------- */
  if (activeStep !== null) {
    const step = steps[activeStep];
    return (
      <div className="min-h-screen bg-[#f8fafc] p-4 sm:p-6 lg:p-8 flex flex-col font-sans text-[#0f172a] box-border animate-in fade-in duration-300">
        <div className="w-full max-w-4xl mx-auto flex flex-col flex-1 py-4 lg:py-8">
          {/* 뒤로 가기 버튼 */}
          <button 
            onClick={() => setActiveStep(null)} 
            className="flex items-center gap-2 text-[#64748b] hover:text-[#0f172a] font-bold mb-6 sm:mb-8 transition-colors self-start cursor-pointer px-4 py-2 hover:bg-slate-200 rounded-full"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" /> 
            <span className="text-sm sm:text-lg">가이드 목차로 돌아가기</span>
          </button>

          {/* 스텝 헤더 배너 */}
          <div className={`bg-white border text-left rounded-3xl p-6 sm:p-10 shadow-sm mb-8 sm:mb-12 ${step.color}`}>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#f1f5f9] flex items-center justify-center shrink-0 shadow-inner">
                {step.icon}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-block text-xs sm:text-sm font-extrabold text-[#94a3b8] mb-2">{step.step} - 보충 설명</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 text-slate-800 break-keep">{step.title}</h2>
                <p className="text-base sm:text-lg text-[#64748b] break-keep leading-relaxed">{step.description}</p>
              </div>
            </div>
          </div>

          {/* 구체적인 실행 방법 리스트 */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-3 px-2 text-slate-800">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
              구체적인 실행 방법
            </h3>
            
            <div className="flex flex-col gap-6">
              {step.taskDetails.map((task, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-black text-sm sm:text-base border border-blue-200 shadow-sm mt-0.5">
                      {idx + 1}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800 leading-snug pt-1 break-keep">{task.title}</h4>
                  </div>
                  <div className="ml-11 sm:ml-14 bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-100">
                    <div className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed break-keep">
                      {task.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 하단 네비게이션 */}
          <div className="mt-12 sm:mt-16 text-center">
            <button 
              onClick={() => setActiveStep(null)} 
              className="bg-[#0f172a] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg cursor-pointer border-none flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg mx-auto w-full sm:w-auto"
            >
              <ArrowLeft className="w-5 h-5" /> 이전 화면으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* -----------------------------------------------------
   * 메인(Main) 뷰
   * ----------------------------------------------------- */
  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 sm:p-6 lg:p-8 flex flex-col font-sans text-[#0f172a] box-border animate-in fade-in duration-300">
      <div className="w-full max-w-7xl mx-auto flex flex-col h-full flex-1 justify-center py-4 lg:py-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12 px-2">
          <div className="inline-block bg-[#fef08a] text-[#854d0e] px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold mb-4 tracking-wide uppercase shadow-sm">
            누구나 할 수 있는 1개월 코스
          </div>
          <h1 className="text-4xl justify-center sm:text-5xl lg:text-6xl font-black mb-4 tracking-tight flex flex-wrap gap-2 items-center break-keep">
            AI 음악 유튜버 <span className="text-red-500">왕초보</span> 탈출기
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#64748b] max-w-3xl mx-auto leading-relaxed break-keep">
            복잡한 기술은 몰라도 됩니다. AI 도구들을 사용해서 나만의 음악 플레이리스트 채널을 운영하는 가장 쉬운 방법을 알려드릴게요!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 flex-1">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white border text-left rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-sm ${item.color}`}
            >
              {/* Step Badge */}
              <div className="flex flex-row sm:flex-col items-center sm:w-28 sm:border-r border-slate-200 sm:pr-6 shrink-0 gap-4 sm:gap-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#f1f5f9] flex items-center justify-center shrink-0 order-1 sm:order-2 shadow-inner">
                  {item.icon}
                </div>
                <div className="flex flex-col flex-1 sm:flex-none order-2 sm:order-1 items-start sm:items-center w-full">
                   <span className="text-sm font-extrabold text-[#94a3b8] sm:mb-4">{item.step}</span>
                   <span className="block sm:hidden text-lg font-bold text-slate-700">{item.subtitle}</span>
                </div>
                <span className="hidden sm:block text-sm font-bold text-[#94a3b8] uppercase mt-4 text-center leading-tight">{item.subtitle}</span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2">
                  {item.title}
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 shrink-0" />
                </h3>
                <p className="text-sm sm:text-base text-[#64748b] mb-6 leading-relaxed break-keep">
                  {item.description}
                </p>
                
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex flex-col gap-3">
                    <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">할 일 리스트 요약</p>
                    {item.tasks.map((task, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-[#334155] font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#94a3b8] shrink-0 fill-slate-100" />
                        <span className="leading-snug break-keep">{task}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#f8fafc] p-4 sm:p-5 rounded-2xl border border-[#f1f5f9] mt-3">
                    <p className="text-xs font-bold text-[#94a3b8] uppercase mb-3 tracking-wider">필요한 도구</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.split(', ').map((tool, ti) => {
                        const cleanTool = tool.trim();
                        const toolLinks: Record<string, string> = {
                          "유튜브": "https://www.youtube.com",
                          "쳇지피티": "https://chatgpt.com",
                          "제미나이": "https://gemini.google.com",
                          "Suno AI": "https://suno.com",
                          "방구석작곡가 웹앱": "https://bang-guseog.com/",
                          "CapCut": "https://www.capcut.com",
                          "웹앱": "https://bang-guseog.com/",
                          "유튜브 스튜디오": "https://studio.youtube.com",
                          "Canva": "https://www.canva.com",
                        };
                        const href = toolLinks[cleanTool] || `https://www.google.com/search?q=${encodeURIComponent(cleanTool)}`;

                        return (
                          <a 
                            key={ti} 
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-[#475569] bg-white border border-[#e2e8f0] px-3 py-1.5 rounded-lg shadow-sm hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                          >
                            {cleanTool}
                            <ArrowRightCircle className="w-3.5 h-3.5 opacity-40 shrink-0" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* 상세 가이드 보기 버튼 */}
                  <button 
                    onClick={() => setActiveStep(index)}
                    className="mt-4 w-full bg-slate-50 text-slate-700 hover:bg-slate-800 hover:text-white border border-slate-200 py-3.5 sm:py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm sm:text-base transition-colors cursor-pointer shadow-sm group"
                  >
                    <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                    <span>구체적인 실행 방법 보기</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Beginner's Advice Card */}
        <div className="mt-8 lg:mt-12 bg-[#1e293b] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-white shrink-0 relative overflow-hidden shadow-xl border border-slate-700">
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 sm:gap-8 w-full text-center sm:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#facc15] rounded-full flex items-center justify-center shrink-0 text-[#0f172a] shadow-inner">
              <Lightbulb size={36} className="sm:w-[40px] sm:h-[40px]" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl sm:text-2xl font-bold italic mb-3">"완벽보다는 완성이 중요합니다!"</h4>
              <p className="text-base sm:text-lg text-[#cbd5e1] leading-relaxed break-keep">
                처음부터 너무 대단한 음악을 만들려 하지 마세요. AI와 노는 것처럼 즐겁게 시작하는 게 포인트입니다. <br className="hidden lg:block" /> 
                꾸준히 하나씩 올리다 보면 어느새 수익 창출 조건에 도달해 있을 거예요. 지금 바로 채널 이름부터 지어보세요!
              </p>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none">
            <Gamepad2 size={240} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
