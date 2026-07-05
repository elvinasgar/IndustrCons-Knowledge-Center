/* =========================================================
   IndustrCons Knowledge — DATA LAYER
   Bütün məzmun bu fayldadır. Yeni mövzu/termin əlavə etmək üçün
   sadəcə aşağıdakı massivlərə yeni sətir/obyekt əlavə edin —
   app.js-də heç nə dəyişdirmək lazım deyil.
   ========================================================= */

const CATEGORIES = [
  {key:"beton", icon:"🧱", name:"Beton", desc:"Növ, marka, quraşdırma"},
  {key:"armatur", icon:"⚙️", name:"Armatur", desc:"Bağlama, birləşmə"},
  {key:"boya", icon:"🎨", name:"Boya", desc:"Astar, üzlük, tətbiq"},
  {key:"izolyasiya", icon:"🧊", name:"İzolyasiya", desc:"Su, istilik, səs"},
  {key:"fasad", icon:"🏢", name:"Fasad", desc:"Örtük materialları"},
  {key:"fitout", icon:"🛠️", name:"Fit-Out", desc:"Daxili bitirmə"},
  {key:"profil", icon:"📐", name:"Profillər", desc:"Metal karkas"},
  {key:"sənaye", icon:"🏭", name:"Sənaye", desc:"İstehsal materialları"},
  {key:"suvaq", icon:"🧽", name:"Suvaq", desc:"Divar düzləndirmə"},
  {key:"agac", icon:"🪵", name:"Taxta/Ağac", desc:"Ağac materialları"},
  {key:"suse", icon:"🪟", name:"Şüşə", desc:"Şüşələmə sistemləri"},
  {key:"dam", icon:"🏠", name:"Dam örtüyü", desc:"Örtük sistemləri"},
  {key:"santexnika", icon:"🚰", name:"Santexnika", desc:"Su-kanalizasiya"},
  {key:"elektrik", icon:"🔌", name:"Elektrik", desc:"Elektrik əsasları"},
  {key:"doseme", icon:"🔲", name:"Döşəmə örtükləri", desc:"Laminat, parket, epoksi"},
];

const ENTRIES = [
// ================= BETON =================
{cat:"beton", title:"Beton markaları (M100–M500) və hara uyğundur", kw:["beton marka","m200","m300","m350","beton növü","hansı beton"],
 body:`Beton markası onun sıxılmaya davamlılığını göstərir (kq/sm² və ya MPa).

• M100–M150 — arayış təbəqəsi, döşəmə altı hazırlıq betonu.
• M200 — az yüklü döşəmələr, sadə özül altlıqları, bordür.
• M250–M300 — monolit özüllər, döşəmə plitələri, adi çərçivə konstruksiyaları.
• M350–M400 — yükdaşıyıcı sütun və tirlər, çoxmərtəbəli bina özülləri, yol örtüyü.
• M450–M500 — hidrotexniki qurğular, körpü konstruksiyaları, xüsusi yüklənmiş elementlər.

Seçim mühəndisin hesablamasına və layihə tələbinə əsaslanmalıdır — marka özbaşına artırılmamalıdır, çünki qiymət və çəki də artır.`},

{cat:"beton", title:"Beton qarışığının su-sement nisbəti (S/S)", kw:["su sement nisbəti","beton qarışığı","beton reseptı"],
 body:`Su/Sement (S/S) nisbəti betonun möhkəmliyinə birbaşa təsir edir — nə qədər az su, bir o qədər yüksək möhkəmlik (lakin işlənmə asanlığı azalır).

Təxmini nisbətlər:
• Yüksək möhkəmlik (M400+): S/S ≈ 0.35–0.40
• Orta (M250–M350): S/S ≈ 0.45–0.50
• Aşağı yüklü elementlər: S/S ≈ 0.55–0.60

Çox su əlavə etmək qarışığı "yumşaldır", tökmə asanlaşır, amma quruduqdan sonra çat və məsaməlik riski artır. İşlənmə asanlığı üçün su artırmaq əvəzinə plastifikasiya edici əlavə (superplastifikator) istifadə olunmalıdır.`},

{cat:"beton", title:"Betonun qurutma (curing) qaydası", kw:["beton qurutma","curing","beton baxımı","beton sulanması"],
 body:`Beton tökdükdən sonrakı ilk 7–14 gün "curing" mərhələsi kritikdir:

1. İlk 24 saat: səth örtülür (bre­zent, plyonka) birbaşa günəş və küləkdən qorumaq üçün.
2. 2–7-ci günlər: gündə 2–3 dəfə su ilə isladılır (isti iqlimdə daha tez-tez), səthin quruması qarşısı alınır.
3. Qış şəraitində: aşağı temperaturda beton "yanmasın" (donmasın) deyə isti örtük/izolyasiya materialı istifadə olunur, kimyəvi antifriz əlavələr tətbiq edilə bilər.
4. Tam yükə davamlılıq adətən 28 gündə əldə olunur (standard test müddəti).

Düzgün curing edilməyən beton öz nəzəri möhkəmliyinin 30–40%-ni itirə bilər.`},

{cat:"beton", title:"Beton tökülməsindən əvvəl qəlibin (opalubka) hazırlanması", kw:["qəlib","opalubka","beton qəlibi"],
 body:`Qəlib hazırlığı addımları:
1. Qəlib lövhələri (faner, metal, plastik) təmizlənir, köhnə beton qalıqları çıxarılır.
2. Qəlib yağı (separasiya yağı) çəkilir ki, beton quruduqdan sonra asan ayrılsın.
3. Ölçü və şaquililik (nivelir/laser səviyyə ilə) yoxlanılır.
4. Bərkitmə elementləri (dayaqlar, klamerlər, stəjənlər) düzgün intervalla quraşdırılır ki, tökmə zamanı təzyiqə tab gətirsin.
5. Armatur qəlib daxilinə yerləşdirildikdən sonra, armaturun qəlib divarından məsafəsi (mühafizə qatı, adətən 25–50mm) plastik "ulitka"/distansiya elementləri ilə təmin olunur.`},

{cat:"beton", title:"Beton əlavələri (kimyəvi additivlər) növləri", kw:["beton əlavəsi","plastifikator","sürətləndirici","ləngidici"],
 body:`Beton qarışığına əlavə olunan əsas kimyəvi maddələr:

• **Plastifikator/superplastifikator** — su miqdarını artırmadan işlənmə asanlığını yüksəldir.
• **Sürətləndirici (accelerator)** — betonun tez bərkiməsini təmin edir, soyuq hava şəraitində və ya tez qəlib açmaq lazım olanda istifadə olunur.
• **Ləngidici (retarder)** — isti hava şəraitində və ya uzaq məsafəyə daşınan hazır betonda tez bərkiməni gecikdirir.
• **Hava sürükləyici (air-entraining)** — donma-əritmə dövrlərinə davamlılığı artırır (soyuq iqlimli xarici konstruksiyalarda vacibdir).
• **Antifriz əlavə** — mənfi temperaturda betonun donmasının qarşısını alır.

Əlavələr həmişə istehsalçının göstərdiyi dozada istifadə olunmalıdır — həddindən artıq miqdar əks effekt verə bilər.`},

{cat:"beton", title:"Hazır (zavod) beton vs tikinti sahəsində qarışdırılan beton", kw:["hazır beton","tovarnı beton","beton zavodu","miksir"],
 body:`**Hazır (tovar) beton** — beton zavodunda dəqiq resept üzrə hazırlanıb miksir maşınla tikinti sahəsinə çatdırılır. Üstünlüyü: keyfiyyət sabitliyi, böyük həcmlərdə sürətli tökmə, laborator sertifikatı. Çatışmazlığı: çatdırılma vaxtı məhduddur (adətən 90–120 dəqiqə ərzində tökülməlidir).

**Sahədə qarışdırılan beton** — kiçik həcmlər üçün (evdaxili işlər, kiçik təmir) beton qarışdırıcı ilə sahədə hazırlanır. Çevikdir, amma resept dəqiqliyi insan amilindən asılıdır və böyük həcmlərdə səmərəsizdir.

Böyük tikinti layihələrində demək olar həmişə hazır beton üstünlük təşkil edir.`},

// ================= ARMATUR =================
{cat:"armatur", title:"Armatur məftil ilə necə bağlanır (bağlama üsulu)", kw:["armatur bağlama","məftil bağlama","armatur məftili","necə bağlanır"],
 body:`Armatur kəsişmə nöqtələri adətən bağlama məftili (0.8–1.2mm bağlama teli) ilə əl və ya avtomat bağlama tapançası ilə bərkidilir:

1. İki armatur çubuğu kəsişmə nöqtəsində tutulur.
2. Məftil kəsişmə ətrafına "8" rəqəmi formasında və ya sadə spiral şəklində 1.5–2 dəfə dolanır.
3. Bağlama qarmağı (kroçet) və ya xüsusi bağlama tapançası ilə məftil bükülüb sıxılır ki, çubuqlar sürüşməsin.
4. Artıq məftil ucu içəriyə (betonun daxilinə doğru) əyilir ki, üzdən çıxıb paslanmasın və ya işçini xəsarətləndirməsin.

Qeyd: bağlama məftili konstruktiv yük daşımır — o sadəcə tökmə zamanı armaturun yerini sabit saxlamaq üçündür. Əsl yükü çubuqların özü və beton daşıyır.`},

{cat:"armatur", title:"Armatur birləşmə üsulları: lövhə (overlap), qaynaq, mufta", kw:["armatur birləşməsi","overlap","qaynaq armatur","mufta birləşmə"],
 body:`Armatur çubuqları uzunluq çatmadıqda 3 əsas üsulla birləşdirilir:

1. **Overlap (üst-üstə düşmə/nəhc)** — ən geniş yayılmış üsul. Çubuqlar müəyyən uzunluqda (adətən diametrin 30–50 qatı) üst-üstə qoyulub bağlama məftili ilə sabitlənir. Sadədir, amma daha çox material tələb edir.
2. **Qaynaq birləşməsi** — çubuqlar birbaşa qaynaqlanır (butt-weld və ya overlap-weld). Yüksək diametrli armaturlarda (16mm+) və material qənaəti lazım olan yerlərdə istifadə olunur, amma ixtisaslı qaynaqçı tələb edir.
3. **Mexaniki mufta (coupler)** — iki çubuq xüsusi rezbəli metal mufta ilə birləşdirilir. Ən etibarlı və sürətli üsuldur, iri diametrli armaturlarda (25mm+) və seysmik zonalarda tövsiyə olunur, amma daha bahalıdır.

Seçim layihə tələbindən, diametrdən və büdcədən asılıdır.`},

{cat:"armatur", title:"Armatur diametrləri və harada istifadə olunur", kw:["armatur diametri","8mm armatur","12mm armatur","hansı armatur"],
 body:`Ümumi diametrlər və tətbiq sahələri:

• Ø6–8mm — köməkçi armatur, en kəsişən (poperek) armatur, xırda elementlər.
• Ø10–12mm — döşəmə plitələri, yüngül tirlər.
• Ø14–16mm — əsas tirlər, sütunlar (adi yüklərdə).
• Ø18–25mm — yükdaşıyıcı sütunlar, çoxmərtəbəli özüllər, körpü konstruksiyaları.
• Ø28–32mm+ — xüsusi ağır konstruksiyalar, sənaye tikintisi.

Diametr seçimi həmişə statik hesablama (mühəndis layihəsi) əsasında olmalıdır, sadəcə "adətən belə olur" məntiqi ilə seçilməməlidir.`},

{cat:"armatur", title:"Armaturun mühafizə qatı (beton örtüyü) nə üçün vacibdir", kw:["mühafizə qatı","beton örtüyü","armatur məsafəsi"],
 body:`Armatur ilə qəlibin xarici səthi arasında müəyyən beton qatı (adətən 25–50mm, mühitdən asılı olaraq) saxlanmalıdır:

• Bu qat armaturu korroziyadan (paslanmadan) qoruyur.
• Yanğın zamanı metala istilik ötürülməsini gecikdirir.
• Beton ilə armatur arasında lazımi yapışma (bond) təmin edir.

Mühafizə qatı çox nazik olarsa — armatur tez paslanar, üzərindəki beton çatlayıb tökülə bilər ("spalling"). Çox qalın olarsa isə konstruksiyanın hesablanan möhkəmliyi zəifləyə bilər. Plastik "ulitka"/distansiya elementləri məhz bu məsafəni saxlamaq üçün istifadə olunur.`},

{cat:"armatur", title:"Paslanmadan qorunmuş armatur növləri", kw:["epoksi armatur","sink örtüklü armatur","paslanmaz armatur"],
 body:`Xüsusi aqressiv mühitlərdə (dəniz kənarı, kimyəvi mühit) adi armatur əvəzinə:

• **Epoksi örtüklü armatur** — çubuq üzərinə epoksi tozu çəkilir, korroziyaya qarşı əlavə baryer yaradır. Körpü, dəniz kənarı konstruksiyalarda istifadə olunur.
• **Sink (qalvanizə) örtüklü armatur** — sink qatı korroziyanı gecikdirir, orta dərəcəli aqressiv mühitlərdə istifadə olunur.
• **Paslanmayan polad (stainless) armatur** — ən yüksək davamlılıq, çox baha, yalnız kritik/xüsusi layihələrdə (məs. tarixi abidə bərpası, dəniz körpüləri).

Adi tikintidə (yaşayış binaları) standart qara armatur + düzgün mühafizə qatı adətən kifayətdir.`},

// ================= BOYA =================
{cat:"boya", title:"Divar boyamanın 3 qatı: astar, əsas, üzlük", kw:["boya qatları","astar boya","üzlük boya","neçə qat boya"],
 body:`Peşəkar boyama prosesi adətən 3 mərhələdən ibarətdir:

1. **Astar (grunt/primer)** — səthin özünü örtərək, sonrakı boyanın bərabər çəkilməsini və yapışmasını təmin edir.
2. **Əsas qat (birinci boya qatı)** — rəngin əsas həcmini yaradır, astar tam qurudduqdan sonra çəkilir.
3. **Üzlük qat (ikinci/son qat)** — rəngin bərabərliyini və davamlılığını təmin edir. Adətən 2 qat boya minimum tövsiyədir.

Hər qat arasında istehsalçının göstərdiyi quruma vaxtına tam riayət edilməlidir, əks halda üzlük qat qabarabilir.`},

{cat:"boya", title:"Boya növləri: su əsaslı, yağlı, epoksi — fərqləri", kw:["boya növü","su əsaslı boya","yağlı boya","epoksi boya"],
 body:`• **Su əsaslı (akril/lateks) boya** — iç məkanlar üçün ən geniş yayılmış, iyi az, tez quruyur (2–4 saat). Divar/tavan üçün ideal.
• **Yağlı boya** — daha davamlı, nəmə qarşı dözümlü, iyi güclü, uzun quruyur (8–24 saat). Metal qapı/pəncərə üçün uyğun.
• **Epoksi boya** — çox yüksək kimyəvi/mexaniki davamlılıq, 2 komponentli. Sənaye döşəmələri, rütubətli mühit üçün, tətbiqi texniki bilik tələb edir.

Seçim məkanın funksiyasına görə edilməlidir.`},

{cat:"boya", title:"Boya necə vurulur: fırça, valik, pulverizator", kw:["boya vurulması","valik ilə boyama","pulverizator boya","fırça ilə boya"],
 body:`3 əsas tətbiq üsulu:

1. **Fırça** — künc, kənar və dar sahələr üçün. Dəqiq, amma yavaş.
2. **Valik** — geniş düz səthlər üçün ən sürətli əl üsulu. "W" hərəkəti ilə çəkilib bərabərləşdirilir.
3. **Pulverizator (spreyleme)** — ən bərabər, peşəkar nəticə, böyük sahələr üçün sürətli, amma maskalama tələb edir.

Tövsiyə: künc/kənarları əvvəlcə fırça ilə "kəsmək", sonra geniş sahəni valik/pulverizatorla doldurmaq.`},

{cat:"boya", title:"Boyadan əvvəl səthin hazırlanması", kw:["boya hazırlıq","səth hazırlığı","suvaq boyaya hazır"],
 body:`Keyfiyyətli nəticə üçün boyadan əvvəl:
1. Səth tozdan, yağdan təmizlənir.
2. Çat/dəlik şpaklovka ilə doldurulub zımparalanır.
3. Köhnə boya soyulan yerlərdə qazınıb təmizlənir.
4. Rütubət yoxlanılır — yeni suvaq üzərinə tez boya çəkmək qabarma və kif riski yaradır.
5. Astar çəkilir.

Hazırlıq mərhələsi keyfiyyəti müəyyən edən ən vacib addımdır.`},

{cat:"boya", title:"Fasad (xarici) boyası — xüsusi tələblər", kw:["fasad boyası","xarici boya","hava davamlı boya"],
 body:`Xarici fasad boyası iç məkan boyasından fərqli xüsusiyyətlərə malik olmalıdır:

• **UV davamlılığı** — günəş şüası altında rəngin solmaması.
• **Su keçirməzlik, lakin "nəfəs alma"** — yağışa qarşı davamlı olmaqla yanaşı, divarın daxilindəki nəmin buxarlanmasına imkan verməlidir (əks halda nəm divar daxilində qalıb zədə yaradır).
• **Temperatur dəyişkənliyinə elastiklik** — qış-yay temperatur fərqində çatlamamalıdır.

Fasad boyasından əvvəl səthin köhnə, tozlu qatlardan təmizlənməsi və nəm ölçümü (adətən 4%-dən az) xüsusilə vacibdir.`},

{cat:"boya", title:"Metal səthlər üçün antikorroziya boyama", kw:["metal boyama","antikorroziya boya","paslanmaya qarşı boya"],
 body:`Metal konstruksiya (armatur açıq qalan yerlər, metal qapı, dəmir barmaqlıq) boyanmadan əvvəl:

1. Pas və köhnə boya mexaniki (metal fırça, zımpara) və ya kimyəvi yolla təmizlənir.
2. Antikorroziya astar (məs. sürik, sink əsaslı qrunt) çəkilir — bu, əsas qoruyucu qatdır.
3. Üzərinə alkid/yağlı boya ilə 1-2 üzlük qat vurulur.

Astarsız birbaşa üzlük boya çəkmək — pas tezliklə boyanın altından "çıxıb" onu qabardacaq, bu ən çox rast gəlinən səhvdir.`},

// ================= İZOLYASİYA =================
{cat:"izolyasiya", title:"İstilik izolyasiyası materialları: mineral yun, XPS, EPS", kw:["istilik izolyasiyası","mineral yun","xps","eps","izolyasiya materialı"],
 body:`• **Mineral yun (daş/şüşə yunu)** — yanğına davamlı, səs izolyasiyası da yaxşıdır, nəmə qarşı həssasdır.
• **EPS (genişlənmiş polistirol/"köpük")** — yüngül, ucuz, nəmə davamlı, amma yanğına davamlılığı aşağıdır.
• **XPS (ekstruziya olunmuş polistirol)** — EPS-dən sıx və davamlı, su udma qabiliyyəti çox aşağı, döşəmə altı/özül izolyasiyasında üstündür.

Fasadda adətən mineral yun/EPS, yeraltı/özül izolyasiyasında XPS tövsiyə olunur.`},

{cat:"izolyasiya", title:"Su izolyasiyası (hidroizolyasiya) üsulları", kw:["hidroizolyasiya","su izolyasiyası","bitum membran","dam izolyasiyası"],
 body:`Əsas hidroizolyasiya üsulları:

1. **Bitum membran (rulon material)** — qaynaqlanaraq səthə yapışdırılır, dam və özül izolyasiyasında geniş istifadə olunur.
2. **Maye/mastika hidroizolyasiya** — fırça/valik ilə çəkilən, tikişsiz təbəqə yaradan material.
3. **Sement əsaslı hidroizolyasiya məhlulu** — hovuz, su anbarı, nəm otaqlarda istifadə olunur.
4. **Sintetik membran (PVC/TPO)** — dam örtüyü altında mexaniki bərkitmə ilə quraşdırılır.

Hər üsulda səthin quru, təmiz və çatsız olması vacibdir.`},

{cat:"izolyasiya", title:"Səs izolyasiyası: divar və döşəmədə necə edilir", kw:["səs izolyasiyası","akustik izolyasiya","divar səs"],
 body:`Səs izolyasiyasının 2 növü fərqləndirilir:
• **Hava səsi izolyasiyası** — kütləvi divar, və ya çoxqatlı karkas + mineral yun + gips karton sistemi ilə azaldılır.
• **Zərbə səsi izolyasiyası** — döşəmə altına elastik təbəqə (akustik membran) qoyulur ki, zərbə enerjisi konstruksiyaya keçməsin ("üzən döşəmə").

Ən effektiv nəticə üçün karkas divarlarda iki tərəfin mexaniki təmasda olmaması vacibdir.`},

{cat:"izolyasiya", title:"Buxar bərabəri (vapor barrier) nədir", kw:["buxar bərabəri","vapor barrier","nəm bərabər"],
 body:`Buxar bərabəri — izolyasiya qatının daxili (isti) tərəfinə qoyulan nazik plyonka/membrandır. Vəzifəsi: otaqdaxili nəmin izolyasiya materialının içinə keçib orada kondensasiya olunmasının qarşısını almaqdır.

Səhv tərəfə (soyuq tərəfə) qoyularsa, nəm izolyasiya daxilində "tutulub qalır", izolyasiya öz xüsusiyyətini itirir və kif/göbələk riski yaranır. Buna görə quraşdırma zamanı hansı tərəfin isti, hansının soyuq olduğu dəqiq bilinməlidir.`},

// ================= FASAD =================
{cat:"fasad", title:"Ventilyasiya olunan fasad sistemi nədir", kw:["ventilyasiya fasad","asma fasad","fasad sistemi"],
 body:`Ventilyasiya olunan (asma) fasad sistemi 3 qatdan ibarətdir:
1. Əsas divar konstruksiyası.
2. İstilik izolyasiya qatı (mineral yun) + hava boşluğu (adətən 40–60mm) — rütubəti bayıra çıxarır.
3. Xarici üz materialı (kompozit panel, keramoqranit, HPL lövhə) — metal alt-konstruksiya üzərinə bərkidilir, divara birbaşa yapışdırılmır.

Üstünlüyü: rütubət/kondensasiya problemini aradan qaldırır, təmir zamanı ayrı-ayrı panelləri dəyişmək mümkündür.`},

{cat:"fasad", title:"Fasad materialları: HPL, kompozit panel, keramoqranit", kw:["hpl panel","kompozit panel","keramoqranit fasad","fasad materialı"],
 body:`• **HPL lövhə** — yüksək təzyiqli laminat, yüngül, geniş rəng çeşidi, orta davamlılıq, tez quraşdırılır.
• **Kompozit panel (ACP)** — iki alüminium təbəqə arası polimer/mineral nüvə, yüngül, müasir görünüş; yanğın təhlükəsizliyi standartlarına diqqət tələb olunur.
• **Keramoqranit** — çox yüksək davamlılıq, UV-yə davamlı, ağırdır, uzunmüddətli baxımsız istifadə üçün əla seçimdir.

Seçim büdcə, bina hündürlüyü və estetik görünüşdən asılıdır.`},

{cat:"fasad", title:"Ştukatur (nazik qat) fasad sistemi", kw:["ştukatur fasad","nazik suvaqlı fasad","fasad suvaq sistemi"],
 body:`Ştukatur fasad sistemi (thin-coat render), izolyasiya lövhəsi (EPS/mineral yun) üzərinə birbaşa suvaq qatlarının çəkilməsi üsuludur:

1. İzolyasiya lövhəsi yapışqanla divara bərkidilir, əlavə olaraq dübel ilə mexaniki sabitlənir.
2. Üzərinə əsas suvaq qatı çəkilir, içinə möhkəmləndirici tor (armaturlaşdırıcı şəbəkə) basdırılır.
3. Qurumadan sonra dekorativ üzlük suvaq (rəngli, faktura verən) tətbiq olunur.

Ventilyasiya olunan fasada nisbətən daha ucuzdur, amma hava boşluğu olmadığı üçün nəm idarəetməsi daha diqqətli layihələndirmə tələb edir.`},

{cat:"fasad", title:"Təbii daş üzlük fasad", kw:["daş fasad","təbii daş üzlük","daş облицовка"],
 body:`Təbii daş (əhəngdaşı, qranit, mərmər) fasad üzlüyü 2 üsulla quraşdırıla bilər:

• **Yapışqanla** — yüngül, nazik daş lövhələr üçün, birbaşa divara yapışdırılır (yalnız aşağı hündürlüklərdə tövsiyə olunur).
• **Mexaniki bərkitmə (ankraj sistemi)** — metal ankraj/kronşteynlərlə asılır, hava boşluğu qala bilər (ventilyasiya effekti). Yüksək binalarda və ağır daş növlərində məcburi üsuldur.

Daş fasad yüksək estetik dəyər verir, amma çəkisinə görə əlavə konstruktiv hesablama tələb edir.`},

// ================= FIT-OUT =================
{cat:"fitout", title:"Gips karton (GKL) divar quraşdırılması", kw:["gips karton","gkl divar","karkas divar"],
 body:`Gips karton divar mərhələləri:
1. Metal karkas (UW/CW profil) döşəmə və tavana bərkidilir, şaquililik lazer səviyyə ilə yoxlanılır.
2. Divar arası izolyasiya lazım olduqda karkas boşluğuna yerləşdirilir.
3. GKL lövhələr vintlə (hər 200-250mm-də bir) profilə bərkidilir.
4. Tikiş yerləri "serpyanka" lent və şpaklovka ilə örtülür, 2-3 qatda hamarlanır.
5. Zımparalama, astar, sonra boya/oboy tətbiqi.

Nəm otaqlarda nəmə davamlı (yaşıl) GKL istifadə olunmalıdır.`},

{cat:"fitout", title:"Kafel (kafeplitka) döşəmə/divar montajı", kw:["kafel montajı","plitka yapışdırma","kafel döşəmə"],
 body:`1. Səth düzləndirilir, toz təmizlənir.
2. Kafel yapışqanı dişli şpatel ilə səthə çəkilir.
3. Kafel yerləşdirilir, xaç/klin ilə tikiş araları bərabərləşdirilir.
4. Səviyyə lazer/su tərəzisi ilə davamlı yoxlanılır.
5. Yapışqan qurudduqdan sonra (24-48 saat) tikiş arası "fuqa" material ilə doldurulur.

Böyük ölçülü plitələrdə (60x60sm+) həm döşəməyə, həm plitənin arxasına yapışqan çəkmək (double-buttering) tövsiyə olunur.`},

{cat:"fitout", title:"Asma tavan sistemləri: Armstrong, GKL, metal kaset", kw:["asma tavan","armstrong tavan","metal kaset tavan"],
 body:`• **Armstrong (mineral lövhə) tavan** — metal T-profil karkas üzərinə düşən mineral lövhələr, ofis/ictimai binalarda geniş yayılıb, kommunikasiyalara asan giriş verir.
• **Gips karton (GKL) asma tavan** — bütöv, tikişsiz görünüş, çoxsəviyyəli dekorativ formalar mümkündür, amma kommunikasiyaya çıxış üçün əlavə lyuk lazımdır.
• **Metal kaset tavan** — nəmə davamlı, təmizlənməsi asan, adətən hovuz, mətbəx, sənaye binalarında istifadə olunur.

Seçim otağın funksiyasına, büdcəyə və kommunikasiya girişi tələbinə görə edilir.`},

{cat:"fitout", title:"Laminat döşəmə montajı", kw:["laminat döşəmə montajı","laminat necə döşənir"],
 body:`1. Əsas döşəmə tam düz olmalıdır (nivelir qarışıq ilə düzləndirmə lazım ola bilər).
2. Nəm bərabəri (plyonka) döşənir (xüsusilə birinci mərtəbədə/beton üzərində).
3. Alt qat (podloji, adətən köpük və ya kork material) sərilir — səs izolyasiyası və kiçik qeyri-bərabərlikləri kompensasiya edir.
4. Laminat lövhələri "kilid" sistemi ilə bir-birinə taxılır, divardan 8-12mm boşluq (dilatasiya) saxlanılır ki, temperatur dəyişəndə laminat "işləyə" bilsin.
5. Son olaraq plinit (döşəmə-divar kənar profili) quraşdırılır.

Dilatasiya boşluğu unudulduqda, laminat isindikdə "qabarır" və dalğalanır.`},

// ================= PROFİL =================
{cat:"profil", title:"CD/UD və CW/UW profillərinin fərqi", kw:["cd profil","ud profil","cw profil","uw profil","metal profil"],
 body:`• **UD/CD profillər** — asma tavan (gips karton tavan) sistemlərində istifadə olunur. UD divar/tavan kənarına bərkidilən "U" formalı çərçivə profilidir, CD isə əsas daşıyıcı ("C" formalı) profildir.
• **UW/CW profillər** — karkas divar sistemlərində istifadə olunur. UW döşəmə/tavana bərkidilən əsas "yol" profilidir, CW isə şaquili dayaq profilidir.

Qarışdırılmamalıdır: tavan profili divarda, divar profili tavanda istifadə olunduqda konstruksiya öz layihə gücünü itirir.`},

{cat:"profil", title:"Alüminium profil sistemləri (pəncərə/fasad)", kw:["alüminium profil","pəncərə profili","fasad profili"],
 body:`Alüminium profillər termik körpü (thermal break) daxil olub-olmamasına görə fərqlənir:
• **Termik körpüsüz profil** — daha ucuz, istilik keçirmə yüksəkdir, qeyri-isidilən məkanlarda istifadə olunur.
• **Termik körpülü profil** — daxilində poliamid ayırıcı olan sistemdir, istilik keçirməni azaldır, yaşayış/ofis binalarında standart tələbdir.

Seçim binanın enerji effektivliyi tələblərinə görə edilməlidir.`},

{cat:"profil", title:"Səsə qarşı ikiqat (ayrılmış) karkas divar sistemi", kw:["ikiqat karkas","səs izolyasiya divar profili","ayrılmış karkas"],
 body:`Adi tək karkas divarda hər iki tərəfin GKL lövhəsi eyni metal profilə bərkidildiyi üçün səs "körpü" kimi profil vasitəsilə keçir. Yüksək səs izolyasiyası lazım olan yerlərdə (yataq otağı-mətbəx arası, mərtəbələr arası) **ikiqat/ayrılmış karkas** istifadə olunur: hər tərəf üçün ayrı, bir-birinə toxunmayan profil sırası qurulur, aralarına mineral yun yerləşdirilir.

Bu üsul adi karkasla müqayisədə səs izolyasiyasını əhəmiyyətli dərəcədə (bir neçə dB) artırır, lakin divarın qalınlığını və material xərcini də artırır.`},

// ================= SƏNAYE =================
{cat:"sənaye", title:"Sənaye tikintisində istifadə olunan sendviç panel", kw:["sendviç panel","sənaye tikinti panel","anbar panel"],
 body:`Sendviç panel iki metal təbəqə arasında izolyasiya nüvəsindən ibarətdir:

• **PIR/PUR nüvəli** — yüngül, yüksək istilik izolyasiyası, tez quraşdırılır, sənaye binaları və anbarlarda geniş istifadə olunur.
• **Mineral yun nüvəli** — yanğına davamlılığı daha yüksəkdir, yanğın normativ tələbi olan obyektlərdə tələb olunur.

Panellər arası birləşmə "kilid" (interlock) profili ilə edilir ki, isti/soyuq körpü minimuma ensin.`},

{cat:"sənaye", title:"Silikat blok, qazbeton və adi kərpic — fərqləri", kw:["qazbeton","silikat blok","kərpic növü","hansı blok"],
 body:`• **Adi (bişmiş) kərpic** — yüksək mexaniki davamlılıq, nisbətən ağır, istilik izolyasiyası orta.
• **Silikat blok** — qum+əhəng əsaslı, hamar səth, yaxşı səs izolyasiyası, nəmə qarşı bişmiş kərpicdən həssasdır.
• **Qazbeton (aerated/gazobeton)** — çox yüngül, yüksək istilik izolyasiyası, asan emal olunur, amma mexaniki davamlılığı aşağıdır.

Seçim: yükdaşıyıcı divarlarda adətən kərpic/beton blok, arakəsmə və istilik-effektiv divarlarda qazbeton üstünlük təşkil edir.`},

{cat:"sənaye", title:"Beton blok (FBS/beton bloklar) özül işlərində istifadəsi", kw:["beton blok","fbs blok","özül bloku"],
 body:`Hazır beton bloklar (FBS tipli) zolaqlı özüllərdə istifadə olunur:
1. Özül əsası (yastıq) hazırlanır — qum-çınqıl döşənib sıxılır.
2. Beton yastıq plitələri (FL) qoyulur.
3. Onların üzərinə beton bloklar sıralarla, aralarında sement məhlulu ilə düzülür.
4. Blok sıraları arasında bərkitmə qatı qoyula bilər ki, quruluş bütöv işləsin.

Hazır blokların üstünlüyü — tökülən monolit özüldən daha sürətli quraşdırma və hava şəraitindən az asılılıqdır.`},

{cat:"sənaye", title:"Polad karkas konstruksiyaları — sənaye binalarının əsası", kw:["polad karkas","metal konstruksiya","sənaye bina karkası"],
 body:`Sənaye binaları (anbar, zavod sexi) tez-tez tam polad karkas üzərində qurulur:

• **Sütun və tirlər** — zavodda hazırlanmış polad profillər (I-profil, kvadrat boru) sahədə bolt və ya qaynaqla birləşdirilir.
• **Fermalar (ferma konstruksiyalar)** — böyük açıqlıqları (30m+) örtmək üçün üçbucaq şəklində birləşmiş elementlərdən ibarət yüngül, güclü konstruksiyalar.
• **Üstünlüyü:** monolit betona nisbətən daha sürətli quraşdırma, daha yüngül özül tələbi, uzun açıqlıq imkanı.

Polad karkas yanğına qarşı əlavə mühafizə (odadavamlı boya/örtük) tələb edir, çünki yüksək temperaturda metal möhkəmliyini sürətlə itirir.`},

{cat:"sənaye", title:"Prefabrik (hazır) beton elementlər", kw:["prefabrik beton","hazır beton panel","beton tir hazır"],
 body:`Prefabrik elementlər zavodda tökülüb hazır halda tikinti sahəsinə gətirilən beton hissələrdir: divar panelləri, döşəmə plitələri, tirlər, pilləkən mərtəbələri.

Üstünlüyü: zavod şəraitində keyfiyyətə tam nəzarət, hava şəraitindən asılı olmayan istehsal, sahədə tez quraşdırma (kran ilə yerinə qoyulur).
Çatışmazlığı: nəqliyyat və kran xərcləri, elementlərin bir-birinə birləşmə düyünlərinin diqqətli layihələndirilməsi lazımdır.

Çoxmərtəbəli yaşayış tikintisində və sənaye obyektlərində sürəti artırmaq üçün geniş istifadə olunur.`},

// ================= SUVAQ =================
{cat:"suvaq", title:"Sement suvaq vs gips suvaq — fərqləri", kw:["sement suvaq","gips suvaq","hansı suvaq"],
 body:`• **Sement suvaq** — nəmə davamlıdır, xarici fasadlarda, nəm otaqlarda (hamam, zirzəmi) istifadə olunur, daha ağır və bərk, qurumaq üçün daha çox vaxt (bir neçə həftə) tələb edir.
• **Gips suvaq** — daha yüngül, tez quruyur (bir neçə gün), daha hamar səth verir, iç otaqlarda (yataq, qonaq otağı) tərcih olunur, amma nəmə davamlı deyil.

Qayda: nəm mühitdə (hamam) sement əsaslı, quru iç otaqlarda gips əsaslı suvaq istifadə olunmalıdır.`},

{cat:"suvaq", title:"Maşınla suvaq vs əllə suvaq", kw:["maşın suvaq","əllə suvaq","suvaq maşını"],
 body:`**Maşınla suvaq** — xüsusi suvaq maşını qarışığı qarışdırıb birbaşa divara püskürdür, iş sürəti əllə suvaqdan bir neçə dəfə yüksəkdir, böyük sahələrdə (yeni tikinti) iqtisadi cəhətdən daha səmərəlidir.

**Əllə suvaq** — mala/qaşov ilə çəkilir, kiçik sahələr, mürəkkəb künclər/detallar üçün, və ya maşın girişi olmayan yerlərdə istifadə olunur. Ustanın təcrübəsindən daha çox asılıdır.

Hər iki üsulda da son mərhələ — "qırma" (hamarlama taxtası ilə səthin son hamarlanması) keyfiyyəti təyin edir.`},

{cat:"suvaq", title:"Divar düzləndirmə mərhələləri (mayak qoyma üsulu)", kw:["divar düzləndirmə","mayak suvaq","divar hamarlama"],
 body:`Böyük qeyri-bərabərliyi olan divarlarda "mayak" (bələdçi profil) üsulu istifadə olunur:

1. Lazer/su tərəzisi ilə divarın ən çıxıq nöqtəsi tapılır — bu, "sıfır xətt" olacaq.
2. Metal mayak profilləri şaquli, bərabər aralıqla (adətən 1–1.5m) divara bərkidilir, hamısı eyni müstəvidə olmalıdır.
3. Mayaklar arası suvaq məhlulu ilə doldurulur, uzun mala (pravilo) mayaklar üzərində sürüşdürülərək artıq material təmizlənir.
4. Qurumadan sonra mayaklar çıxarılıb yerləri əlavə suvaqla doldurulur.

Bu üsul tam düz, peşəkar divar səthi almağın standart yoludur.`},

// ================= TAXTA/AĞAC =================
{cat:"agac", title:"Tikintidə istifadə olunan əsas ağac növləri", kw:["şam ağacı","palıd taxta","tikinti ağacı"],
 body:`• **Şam (küknar/yel)** — ucuz, işlənməsi asan, karkas konstruksiya, dam tirləri, müvəqqəti qəlib işlərində geniş istifadə olunur.
• **Palıd** — çox möhkəm və davamlı, bahalıdır, mebel, parket, ağır yük daşıyan elementlərdə istifadə olunur.
• **Şərq/tropik ağac növləri (meranti və s.)** — nəmə davamlı, çöl mebeli, gəmi/liman konstruksiyalarında istifadə olunur.

Bütün konstruktiv ağac materialı istifadədən əvvəl rütubət səviyyəsinə (adətən 12-18%) görə qurudulmalı və zərərvericilərə qarşı işlənməlidir.`},

{cat:"agac", title:"OSB və faner lövhələr — fərqləri və istifadəsi", kw:["osb lövhə","faner","tikinti lövhəsi"],
 body:`• **OSB (Oriented Strand Board)** — yonulmuş ağac lifi təbəqələrinin təzyiq altında yapışdırılmasından hazırlanır, dam örtüyü altlığı, döşəmə əsası, müvəqqəti hasarlama üçün istifadə olunur, nisbətən ucuzdur.
• **Faner** — nazik ağac vərəqlərinin (şpon) bir-birinə perpendikulyar yapışdırılmasından hazırlanır, daha hamar səth verir, mebel istehsalı, qəlib işləri (beton qəlibi üçün laminə edilmiş faner) üçün üstünlük təşkil edir.

Nəm mühit üçün hər iki materialın su-davamlı (WBP/nəmə davamlı) versiyaları seçilməlidir.`},

{cat:"agac", title:"Ağacın impregnasiyası (qoruyucu emalı)", kw:["ağac impregnasiya","taxta qoruyucu","ağac lak"],
 body:`Ağac materialını zərərvericilərdən (kif, göbələk, həşərat) və rütubətdən qorumaq üçün:

1. **Antiseptik hopdurma (impregnasiya)** — kimyəvi məhlula batırma və ya fırça ilə çəkmə yolu ilə ağacın daxilinə hopdurulur, çürüməyə qarşı qoruyur.
2. **Antipiren emal** — yanğına qarşı davamlılığı artırır (odadavamlı ağac tələb olunan yerlərdə).
3. **Lak/örtük** — xarici mühitdə UV və rütubətdən əlavə qoruma, həm də estetik görünüş üçün son qat kimi çəkilir.

Xarici mühitdə istifadə olunan bütün konstruktiv ağac elementləri mütləq bu emallardan keçməlidir.`},

// ================= ŞÜŞƏ =================
{cat:"suse", title:"Stəkan paket (double/triple glazing) nədir", kw:["stəkan paket","ikiqat şüşə","enerqoeffektiv şüşə"],
 body:`Stəkan paket — iki (double) və ya üç (triple) şüşə təbəqəsinin arasında hava/qaz (adətən arqon) boşluğu olan pəncərə sistemidir:

• Hava/qaz boşluğu istilik izolyasiyası yaradır — otaqdan istiliyin çölə çıxmasını azaldır.
• Triple glazing daha yüksək izolyasiya verir, amma daha ağır və bahadır.
• Low-E (aşağı emissiyalı) örtük əlavə edildikdə istilik izolyasiyası daha da yaxşılaşır.

Soyuq iqlimli bölgələrdə (qış aylarında) enerji qənaəti baxımından minimum double glazing tövsiyə olunur.`},

{cat:"suse", title:"Temperli (bərkidilmiş) vs laminə edilmiş şüşə", kw:["temperli şüşə","laminə şüşə","təhlükəsizlik şüşəsi"],
 body:`• **Temperli (bərkidilmiş) şüşə** — istilik emalı ilə möhkəmləndirilib, sındıqda kiçik, kəskin olmayan hissəciklərə parçalanır (təhlükəsizlik üçün). Duş kabinləri, şüşə qapılar, balkon məhəccərləri üçün standart tələbdir.
• **Laminə edilmiş şüşə** — iki (və ya çox) şüşə təbəqəsi arasında elastik plyonka (PVB) olan şüşədir, sındıqda hissələr plyonkaya "yapışıq" qalır, dağılmır. Yerdən yüksək pəncərələr, üst işıqlıq, təhlükəsizlik tələb olunan fasadlar üçün istifadə olunur.

İkisi də adi şüşədən fərqli olaraq sınanda böyük, iti hissələrə bölünmür.`},

// ================= DAM ÖRTÜYÜ =================
{cat:"dam", title:"Metal profilli dam örtüyü (profnastil/metaldan)", kw:["profnastil","metal dam örtüyü","dam profili"],
 body:`Profillənmiş metal vərəqlər (profnastil) — yüngül, sürətli quraşdırılan, uzun ömürlü dam örtüyü materialıdır:

1. Dam karkası (taxta və ya metal latalar) hazırlanır.
2. Su izolyasiya membranı (hidrobarrier) latalar altına sərilir.
3. Metal vərəqlər üst-üstə minimum 1 dalğa (və üfüqi istiqamətdə minimum 100-150mm) örtərək bərkidilir ki, su sızmasın.
4. Xüsusi özül vintlər (rezin şaybalı) ilə latalara bərkidilir.

Səs izolyasiyası zəif olduğu üçün yaşayış binalarında dam altına əlavə səs/istilik izolyasiya qatı tövsiyə olunur.`},

{cat:"dam", title:"Bitum şindel (gonta) dam örtüyü", kw:["bitum şindel","gonta","yumşaq dam örtüyü"],
 body:`Bitum şindel (əsli ingiliscə "shingle") — kiçik, bir-birinin üzərinə düşən bitum əsaslı örtük vərəqləridir, mürəkkəb formalı (çoxmeyilli) damlarda geniş istifadə olunur:

1. OSB/faner əsas üzərinə su izolyasiya təbəqəsi sərilir.
2. Şindellər aşağıdan yuxarıya doğru, bir-birini örtəcək şəkildə mismarlanır/yapışdırılır.
3. Dam təpəsi (konyok) xüsusi əyilə bilən şindel zolağı ilə örtülür.

Metal örtüyə nisbətən daha səssiz (yağış zamanı), amma xidmət müddəti adətən daha qısadır.`},

{cat:"dam", title:"Dam meylinin (eyiminin) əhəmiyyəti", kw:["dam meyli","dam eyimi","dam bucağı"],
 body:`Dam meyli (dərəcə və ya faizlə ölçülür) suyun və qarın dam üzərində toplanmadan axıb getməsini təmin edir:

• **Az meylli (2-5%)** — düz dam sistemləri, membran örtük tələb edir, su yığılmasının qarşısını almaq üçün əlavə drenaj nöqtələri lazımdır.
• **Orta meylli (15-30°)** — profnastil, bitum şindel üçün standart aralıq.
• **Dik meylli (30°+)** — çox yağıntılı/qarlı bölgələrdə, həm sürətli su axını, həm estetik görünüş üçün.

Örtük materialının növü seçilərkən istehsalçının tövsiyə etdiyi minimum meyl bucağına riayət olunmalıdır — əks halda su/qar sızması riski artır.`},

// ================= SANTEXNİKA =================
{cat:"santexnika", title:"Su kəməri boru növləri: PPR, PEX, metal-plastik", kw:["su borusu","ppr boru","pex boru","metal plastik boru"],
 body:`• **PPR (polipropilen) boru** — isti/soyuq su xətlərində geniş istifadə olunur, xüsusi payka aparatı ilə "qaynaqlanaraq" birləşdirilir, etibarlı və nisbətən ucuzdur.
• **PEX (çarpaz bağlı polietilen) boru** — çevik, əyilə bilir (döşəmə altından keçirməyə əlverişli), fitinglə birləşdirilir, döşəmə isitmə sistemlərində standart seçimdir.
• **Metal-plastik boru** — polietilen qatları arasında alüminium təbəqə olan boru, forması saxlanılan çevikliyə malikdir, fitinglə birləşir.

Boru növü seçimi təzyiq, temperatur tələbi və quraşdırma üsuluna görə edilir.`},

{cat:"santexnika", title:"Kanalizasiya borusu diametrləri və istifadəsi", kw:["kanalizasiya borusu","pvc boru diametri","çirkab su borusu"],
 body:`Adi diametrlər:
• **Ø50mm** — lavabo, duş axarı üçün yan xətlər.
• **Ø75-90mm** — mətbəx axarı, əlavə sanitar cihazlar.
• **Ø110mm** — unitaz bağlantısı və əsas şaquli stoyak (əsas kanalizasiya xətti).
• **Ø160mm+** — bina əsas kollektoru, çoxmənzilli binalarda ümumi xətt.

Kanalizasiya boruları həmişə müəyyən meyl bucağı ilə (adətən 1-2%) döşənməlidir ki, su öz-özünə axıb getsin, əks halda tıxanma riski yaranır.`},

{cat:"santexnika", title:"Santexnik armaturlar: kranlar və ventillər əsasları", kw:["santexnik kran","ventil","su kəsici kran"],
 body:`• **Top kran (ball valve)** — 90° fırlanma ilə tam açıq/tam bağlı işləyir, əsas su kəsici kranlar üçün standart seçimdir, sürətli əməliyyat üçün əlverişlidir.
• **Ventil (qapaqlı kran)** — çoxdövrəli fırlanma ilə açılıb bağlanır, axını dəqiq tənzimləməyə (qismən açma) daha uyğundur.
• **Geri qaytarmayan klapan (çek klapan)** — suyun yalnız bir istiqamətdə axmasına icazə verir, nasoslarda və geri axının qarşısını almaq lazım olan yerlərdə istifadə olunur.

Hər santexnik qurğu quraşdırılmazdan əvvəl əsas su xətti kəsilməli və sistemdəki təzyiq boşaldılmalıdır.`},

// ================= ELEKTRİK =================
{cat:"elektrik", title:"Kabel en kəsiyi seçiminin əsas qaydası", kw:["kabel en kəsiyi","elektrik kabeli seçimi","hansı kabel"],
 body:`Kabel en kəsiyi (mm²) yük cərəyanına və məsafəyə görə seçilir — kifayət qədər qalın olmayan kabel qızma və yanğın riski yaradır:

• **1.5mm²** — işıqlandırma xətləri (adətən 10A-a qədər yük).
• **2.5mm²** — adi rozetka xətləri (adətən 16A-a qədər).
• **4-6mm²** — mətbəx, kondisioner, elektrik su qızdırıcısı kimi yüksək güclü cihazlar üçün ayrıca xətlər.
• **10mm²+** — əsas mənzil/ev girişi xətti, elektrik lövhəsinə qədər olan magistral kabel.

Dəqiq seçim cihazın gücünə (Vt), məsafəyə və qəbul edilən gərginlik düşməsinə görə hesablanmalıdır — bu, mütləq ixtisaslı elektrik mühəndisi tərəfindən edilməlidir.`},

{cat:"elektrik", title:"Elektrik lövhəsi (şit) və avtomatlar", kw:["elektrik lövhəsi","avtomat açar","elektrik şiti"],
 body:`Elektrik paylayıcı lövhə (şit) binanın bütün elektrik xətlərinin idarə olunduğu mərkəzi nöqtədir:

• **Əsas avtomat (giriş avtomatı)** — bütün binanın/mənzilin ümumi cərəyanını məhdudlaşdırır.
• **Qrup avtomatları** — hər otaq/funksiya üçün ayrıca xətt (işıqlandırma, rozetka, mətbəx) qoruyur, həddindən artıq yükdə həmin xətti dərhal kəsir.
• **DIF (diferensial) açar/UZO** — sızma cərəyanını (məs. insanın elektrik cərəyanı vurmasını) aşkarlayıb dərhal xətti kəsir, xüsusilə nəm otaqlar (hamam, mətbəx) üçün mütləq tələb olunur.

Hər qrup üçün ayrı avtomat qoymaq — bir otaqdaki nasazlığın bütün binanı qaranlıqda qoymasının qarşısını alır.`},

{cat:"elektrik", title:"Torpaqlama (yerləşdirmə) sistemi nədir", kw:["torpaqlama","yerləşdirmə sistemi","zəmin xətti"],
 body:`Torpaqlama — elektrik sistemində baş verə biləcək qəza cərəyanının təhlükəsiz şəkildə yerə (torpağa) yönləndirilməsi sistemidir:

1. Bina yaxınlığında torpaqlama konturu (metal ştanqlar torpağa basdırılır) qurulur.
2. Bu kontur əsas elektrik şitinə "PE" (qoruyucu keçirici) xətti ilə bağlanır.
3. Bütün rozetka və metal gövdəli cihazlar (soyuducu, paltaryuyan) bu PE xəttinə qoşulur.

Torpaqlama olmadıqda, cihazın metal gövdəsində nasazlıq yarandıqda gərginlik gövdədə "qalır" və toxunan insana ötürülə bilər — bu, ciddi təhlükəsizlik riskidir və heç bir halda buraxılmamalıdır.`},

// ================= DÖŞƏMƏ ÖRTÜKLƏRİ =================
{cat:"doseme", title:"Laminat vs parket — fərqləri", kw:["laminat parket fərqi","hansı döşəmə","parket növü"],
 body:`• **Laminat** — sıxılmış ağac lifi (HDF) əsasına dekorativ təbəqə və qoruyucu üst laminat çəkilmiş məhsuldur, ucuz, quraşdırılması asan (kilid sistemi), amma real ağac deyil, cızılanda təmir olunmur (lövhə dəyişdirilir).
• **Parket (massiv/mühəndis parket)** — real ağacdan hazırlanır, zımparalanıb yenidən lak çəkilə bilər (uzun ömür), daha bahadır, rütubətə daha həssasdır.

Büdcə məhdud olduqda və tez quraşdırma lazım olduqda laminat, uzunmüddətli investisiya və "canlı" ağac hissi üçün parket seçilir.`},

{cat:"doseme", title:"Epoksi döşəmə (sənaye/qaraj üçün)", kw:["epoksi döşəmə","sənaye döşəməsi","qaraj döşəməsi"],
 body:`Epoksi döşəmə — beton əsas üzərinə çəkilən 2-komponentli (əsas+bərkidici) kimyəvi örtükdür:

1. Beton səth cilalanır/aşındırılır ki, epoksi yaxşı yapışsın.
2. Astar qatı (beton məsamələrini bağlayan) çəkilir.
3. Əsas epoksi qat (rəngli, bəzən kvars qumu ilə örtülü sürüşməyə qarşı) tətbiq olunur.
4. İstəyə görə üzərinə qoruyucu şəffaf lak (topcoat) çəkilir.

Kimyəvi maddələrə, mexaniki zərbəyə davamlıdır, tez təmizlənir — zavod, anbar, qaraj, tibb müəssisələri üçün standart seçimdir.`},

{cat:"doseme", title:"Öztəyinatlı (self-leveling) döşəmə qarışığı", kw:["öztəyinatlı döşəmə","self leveling","döşəmə düzləndirmə qarışığı"],
 body:`Self-leveling (özü-özünü səviyyələndirən) qarışıq — maye kimi axan, öz ağırlığı ilə yayılıb tamamilə düz səth yaradan sement/gips əsaslı materialdır:

1. Əsas döşəmə tozdan təmizlənir, astar çəkilir (yapışmanı artırmaq üçün).
2. Qarışıq su ilə hazırlanıb döşəməyə tökülür.
3. Iynəli valik (dəbilqə valik) ilə üzərindən keçilir ki, hava qabarcıqları çıxsın.
4. Material öz-özünə yayılıb bir neçə saat ərzində yeriməyə hazır səth yaradır (tam bərkimə bir neçə gün çəkir).

Laminat, parket və ya kafel altında mükəmməl düz əsas hazırlamaq üçün ən sürətli üsuldur.`},
];

const DICTIONARY = [
  ["Opalubka (qəlib)","Beton tökülərkən onun formasını saxlayan müvəqqəti konstruksiya (faner, metal, plastik)."],
  ["Armatur","Betonun daxilində yerləşən polad çubuq, konstruksiyaya dartılma gücü verir."],
  ["Marka (beton)","Betonun sıxılmaya davamlılıq göstəricisi (məs. M300)."],
  ["Curing","Beton tökdükdən sonra onun düzgün quruması/bərkiməsi üçün baxım prosesi."],
  ["Mühafizə qatı","Armatur ilə qəlib səthi arasında saxlanan beton qatı, korroziyadan qoruyur."],
  ["Astar (grunt)","Boyadan əvvəl səthə çəkilən hazırlayıcı material, yapışmanı artırır."],
  ["Şpaklovka","Səthdəki çat/dəliyi doldurub hamarlamaq üçün istifadə olunan material."],
  ["Hidroizolyasiya","Su keçirməyə qarşı qoruyucu təbəqə/material."],
  ["Termik körpü","Konstruksiyada istiliyin sərbəst keçdiyi, izolyasiya olunmamış zəif nöqtə."],
  ["Sendviç panel","İki metal təbəqə arasında izolyasiya nüvəsi olan tikinti paneli."],
  ["Qazbeton (aerated concrete)","Çox yüngül, məsaməli, yüksək istilik izolyasiyalı beton blok növü."],
  ["Kronşteyn","Fasad panelini divara bərkidən metal dayaq elementi."],
  ["Fuqa","Kafel/plitə arası tikişi dolduran material."],
  ["Nivelir","Səthin şaquililiyini/üfüqiliyini ölçən alət və ya bu məqsədlə istifadə olunan qarışıq."],
  ["Distansiya (ulitka)","Armaturu qəlib divarından müəyyən məsafədə saxlayan plastik element."],
  ["Serpyanka","Gips karton tikişlərini möhkəmləndirmək üçün istifadə olunan tor lent."],
  ["Overlap (nəhc)","İki armatur çubuğunun üst-üstə düşərək birləşdirilməsi üsulu."],
  ["Mufta (coupler)","Armatur çubuqlarını mexaniki yolla birləşdirən rezbəli metal element."],
  ["HPL","Yüksək təzyiqli laminat — fasad örtüyündə istifadə olunan yüngül material."],
  ["ACP","Alüminium kompozit panel — fasad örtük materialı."],
  ["Keramoqranit","Yüksək sıxlıqlı, davamlı keramik plitə növü, fasad və döşəmədə istifadə olunur."],
  ["EPS","Genişlənmiş polistirol — yüngül istilik izolyasiya materialı."],
  ["XPS","Ekstruziya olunmuş polistirol — nəmə davamlı, sıx istilik izolyasiya materialı."],
  ["PIR/PUR","Sendviç panellərdə istifadə olunan yüksək effektiv izolyasiya köpüyü."],
  ["Qazalov qaynağı (bitum)","Bitum membranın alov ilə qızdırılıb səthə yapışdırılması üsulu."],
  ["Plastifikator","Beton qarışığının işlənmə asanlığını artıran kimyəvi əlavə."],
  ["Antifriz əlavə","Soyuq havada betonun donmasının qarşısını alan kimyəvi qarışıq."],
  ["Vintləmə (GKL)","Gips karton lövhələrin metal karkasa vint ilə bərkidilməsi."],
  ["Klein/krestik","Kafel araları bərabər saxlamaq üçün istifadə olunan plastik xaç."],
  ["Double-buttering","Böyük plitələrdə boşluq qalmaması üçün yapışqanın həm döşəməyə, həm plitəyə çəkilməsi."],
  ["BOQ","Bill of Quantities — layihədə lazım olan material və işlərin siyahısı/həcm cədvəli."],
  ["HSE","Health, Safety, Environment — iş yerində təhlükəsizlik və sağlamlıq standartları."],
  ["QA/QC","Quality Assurance/Quality Control — keyfiyyətə təminat və nəzarət prosesləri."],
  ["Monolit","Beton konstruksiyanın tikinti sahəsində birbaşa tökülərək hazırlanması üsulu."],
  ["Sərbəst (üzən) döşəmə","Zərbə səsini azaltmaq üçün əsas döşəmədən elastik təbəqə ilə ayrılmış döşəmə sistemi."],
  ["Buxar bərabəri","Nəmin izolyasiya daxilinə keçib kondensasiya olunmasının qarşısını alan membran."],
  ["Termik ayrılma (thermal break)","Alüminium profildə istilik keçirməni azaldan daxili ayırıcı material (poliamid)."],
  ["Latalar","Dam örtüyünün bərkidildiyi taxta/metal əsas çubuqlar."],
  ["Konyok","Damın ən yuxarı, iki mailin birləşdiyi xətti."],
  ["Drenaj","Suyun idarə olunan şəkildə yığılıb axıdılması sistemi."],
  ["Stoyak","Bina daxilində şaquli istiqamətdə keçən əsas su/kanalizasiya xətti."],
  ["UZO/DIF açar","Elektrik sızma cərəyanını aşkarlayıb dərhal xətti kəsən qoruyucu açar."],
  ["PE xətti","Elektrik sistemində qoruyucu torpaqlama keçiricisi."],
  ["Self-leveling","Öz ağırlığı ilə yayılıb düz səth yaradan döşəmə qarışığı."],
  ["Podloji","Laminat/parket altına sərilən səs izolyasiya edən alt qat."],
];
