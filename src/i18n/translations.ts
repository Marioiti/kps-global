export type Language = 'en' | 'ru' | 'zh';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.approach': 'How We Work',
    'nav.sectors': 'Sectors',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': 'Independent operations & transaction advisory',
    'hero.title': 'An operating partner for cross-border projects',
    'hero.subtitle':
      'KPS Global helps founders and investors structure, staff and execute complex international deals and operations — as an independent consultant, never as a broker in the chain.',
    'hero.cta': 'Start a conversation',
    'hero.secondaryCta': 'See how we work',
    'hero.reachLabel': 'Active markets',
    'hero.trust':
      'Fractional COO leadership, transaction structuring and compliance across Singapore, China, Hong Kong, Malaysia, the US, the UAE, India and Indonesia.',

    // About
    'about.sectionLabel': 'Who We Are',
    'about.title': 'Operational depth, without the payroll',
    'about.lead':
      'KPS Global is a boutique management-consulting practice led by a team of seasoned professionals from a range of industries. We embed alongside your team to run the operational and transactional work that moves a cross-border deal or venture from intent to completion — structuring, counterparty engagement, compliance and documentation — with the discipline of an in-house operator and the independence of an outside adviser.',
    'about.team':
      'A core team of seven — specialists in management, finance, law, international supply, logistics and fuel.',
    'about.clients':
      'We work with investors, fuel and state-owned companies, funds and corporations.',
    'stats.since': 'Operating since',
    'stats.volume': 'Supported deal value, 5 yrs',
    'stats.deals': 'Transactions structured',
    'stats.countries': 'Countries · 5 offices',
    'about.p1.title': 'Independent by design',
    'about.p1.desc':
      'We advise and coordinate — we do not take title, trade on our own book, or sit inside the payment chain. Your interests are the only ones we carry.',
    'about.p2.title': 'Compliance-first',
    'about.p2.desc':
      'Every engagement starts with KYC, sanctions and legal structuring. If a deal cannot be done cleanly, we say so early.',
    'about.p3.title': 'Outcome-focused',
    'about.p3.desc':
      'We are measured by completion, not activity: signed contracts, closed transactions and operations that keep running after we step back.',
    'about.notLabel': 'What we are not',
    'about.notDesc':
      'KPS Global is an independent consultant — not a broker, trader, or payment agent. We stay outside the goods and payment chain and never hold client funds.',

    // Services
    'services.sectionLabel': 'What We Do',
    'services.title': 'Three ways we work with you',
    'services.subtitle':
      'From a single transaction to standing operational leadership — engagements are scoped to the outcome you need.',

    'services.trade.title': 'Cross-border trade & transaction support',
    'services.trade.desc':
      'Independent structuring and hands-on support for international supply and off-take deals — from first contact to signed contract.',
    'services.trade.details':
      'We support principals through the full lifecycle of a cross-border transaction as an independent consultant: preparing and verifying documentation, engaging and screening counterparties, running negotiations on your behalf, and structuring the deal and its contracts. We work with energy and LNG, non-ferrous metals and industrial commodities of non-sanctioned origin. We are never the buyer, seller or payment agent — you retain full control of goods and funds.',

    'services.coo.title': 'Fractional COO & operational leadership',
    'services.coo.desc':
      'Part-time, senior operational leadership for ventures and projects that need execution capacity without a full-time hire.',
    'services.coo.details':
      'We step in as your Fractional COO to build and run operations for international ventures and projects: setting up processes, coordinating partners and vendors, standing up cross-border structures, and driving delivery to completion. Ideal for founders and investors entering new markets — including project delivery in Indonesia and Southeast Asia — who need seasoned operational leadership on a flexible, retained basis.',

    'services.compliance.title': 'Compliance, KYC & deal structuring',
    'services.compliance.desc':
      'The governance layer under every deal: KYC/AML, sanctions review, legal structuring and full transaction documentation.',
    'services.compliance.details':
      'We build the compliance and legal backbone of your transaction: KYC and counterparty due diligence, sanctions screening (OFAC, EU, UN, UK), source-of-funds and jurisdiction review, and structuring aligned with anti-bribery standards (FCPA, UK Bribery Act) and applicable data-protection law. We prepare the full contract and documentation package so the deal stands up to a bank’s or counterparty’s scrutiny.',

    'services.process.title': 'How an engagement runs',
    'services.process.step1': 'Discovery & scope — objectives, constraints and the outcome that defines success.',
    'services.process.step2': 'KYC & due diligence — verification and screening of all parties before any engagement.',
    'services.process.step3': 'Structuring — sanctions, legal and commercial structure that keeps you compliant.',
    'services.process.step4': 'Engagement & negotiation — counterparties onboarded and negotiated on your behalf.',
    'services.process.step5': 'Documentation & handover — full contract package, execution support and a clean handover.',
    'services.cta': 'Start a conversation',

    // Approach / How We Work
    'approach.sectionLabel': 'How We Work',
    'approach.title': 'A transparent engagement model',
    'approach.subtitle':
      'Every engagement follows the same disciplined sequence, so you always know what happens next — and what it costs.',

    'approach.step1.title': 'Discovery & Scope',
    'approach.step1.desc': 'We map the project, objectives and constraints, then agree a clear scope and deliverables.',

    'approach.step2.title': 'KYC & Due Diligence',
    'approach.step2.desc': 'Collection and verification of KYC, counterparty and background checks before any engagement.',

    'approach.step3.title': 'Sanctions & Legal Structuring',
    'approach.step3.desc':
      'Sanctions screening (OFAC, EU, UN, UK), source-of-funds and jurisdiction review, and a structure that keeps you compliant — including non-sanctioned origin where required.',

    'approach.step4.title': 'Counterparty Engagement',
    'approach.step4.desc': 'We onboard suppliers and counterparties and run negotiations on your behalf and in your interest.',

    'approach.step5.title': 'Structuring & Documentation',
    'approach.step5.desc': 'Full deal structuring and the complete contract and transaction documentation package.',

    'approach.step6.title': 'Execution Support & Closing',
    'approach.step6.desc': 'Hands-on support through execution and closing — the principals transact directly; we coordinate, not intermediate.',

    'approach.feeTitle': 'Engagement & fees',
    'approach.feeDesc':
      'Engagements combine a fixed retainer, milestone-based fees for delivered stages, and a success fee on completion. Retainer and milestone fees are earned for work delivered — independent of the final transaction. We do not hold client funds and take no position in the payment chain.',

    // Sectors & Geographies
    'sectors.sectionLabel': 'Sectors & Reach',
    'sectors.title': 'Where we operate',
    'sectors.subtitle': 'Deep focus in a few sectors, across the corridors where cross-border deals actually happen.',

    'sectors.industries.title': 'Sectors',
    'sectors.industries.desc':
      'Energy & LNG, fuel, non-ferrous metals (aluminium), industrial commodities (sulphur), and international project delivery & management.',

    'sectors.geographies.title': 'Geographies',
    'sectors.geographies.desc':
      'Active across Singapore, China, Hong Kong, Malaysia, the United States, the UAE, India and Indonesia — structuring engagements that bridge jurisdictions, languages and compliance regimes.',
    'sectors.presenceTitle': 'Global presence',
    'sectors.officesLabel': 'Offices',
    'sectors.marketsLabel': 'Markets we serve',
    'sectors.entitiesNote': 'Registered entities in China, Indonesia, Russia and the USA.',

    // Governance & Compliance
    'governance.sectionLabel': 'Governance',
    'governance.title': 'Compliance is the foundation, not an afterthought',
    'governance.subtitle': 'The standards we apply on every engagement — the reason our deals survive due diligence.',

    'governance.kyc.title': 'KYC & AML',
    'governance.kyc.desc': 'Identity, ownership and source-of-funds checks on every counterparty before we engage.',

    'governance.sanctions.title': 'Sanctions screening',
    'governance.sanctions.desc': 'OFAC, EU, UN and UK screening of all parties. We decline or exit any engagement with sanctions exposure.',

    'governance.anticorruption.title': 'Anti-bribery',
    'governance.anticorruption.desc': 'Conduct aligned with the FCPA and the UK Bribery Act — legitimate representation only.',

    'governance.data.title': 'Data protection',
    'governance.data.desc':
      'Personal data handled under Indonesia’s UU PDP (No. 27/2022) and, where applicable, Russia’s Law No. 152-FZ.',

    // Contact
    'contact.sectionLabel': 'Contact',
    'contact.title': 'Start a conversation',
    'contact.subtitle': 'Tell us about your project or transaction. We reply within two business days.',

    'contact.name': 'Name',
    'contact.namePlaceholder': 'Full name',
    'contact.company': 'Company & jurisdiction',
    'contact.companyPlaceholder': 'e.g. Acme Trading Ltd, Singapore',
    'contact.area': 'Area of interest',
    'contact.areaPlaceholder': 'Select an area',
    'contact.areaTrade': 'Trade & transaction support',
    'contact.areaCOO': 'Fractional COO',
    'contact.areaCompliance': 'Compliance & structuring',
    'contact.areaOther': 'Other',
    'contact.message': 'How can we help?',
    'contact.messagePlaceholder': 'A few lines about your project, deal or goal.',
    'contact.privacyPrefix': 'I consent to the processing of my personal data in accordance with the ',
    'contact.privacyLink': 'Privacy Policy',
    'contact.privacySuffix': '.',
    'contact.submit': 'Send message',
    'contact.submitting': 'Sending…',
    'contact.success': 'Thank you. We will reply within two business days.',
    'contact.error': 'Failed to send. Please try again or email us directly.',
    'contact.directLabel': 'Or reach us directly',
    'contact.emailLabel': 'Email',
    'contact.whatsappLabel': 'WhatsApp',
    'contact.linkedinLabel': 'LinkedIn',

    // Footer
    'footer.companyName': 'KPS Global',
    'footer.tagline': 'An operating partner for cross-border projects',
    'footer.registered':
      'KPS Global is a trade name of PT Kusuma Petak Sari, a management-consulting firm registered in Indonesia. We act strictly as an independent consultant and coordinator — not a broker, trader, or payment agent — we stay outside the goods and payment chain, and we never hold client funds.',
    'footer.entity': 'PT Kusuma Petak Sari · Management Consulting (KBLI 70209) · NIB 1206250044214',
    'footer.address': 'Jalan Sidakarya, Denpasar Selatan, Bali 80244, Indonesia',
    'footer.staff': 'Team Access',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': 'All rights reserved.',
    'footer.trust1': 'Independent',
    'footer.trust2': 'Compliance-first',
    'footer.trust3': 'Reputation over speed',

    // NotFound
    'notFound.title': 'Oops! Page not found',
    'notFound.backHome': 'Return to Home',

    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.backHome': 'Back to Home',
    'privacy.lastUpdatedLabel': 'Last updated',
    'privacy.lastUpdatedDate': '18 July 2026',
    'privacy.intro': `KPS Global is a trade name of **PT Kusuma Petak Sari** ("KPS", "we", "us"), a management-consulting firm registered in the Republic of Indonesia. This Policy explains how we handle personal data collected through this website (kpsglobal.id), in line with **Law of the Republic of Indonesia No. 27 of 2022 on Personal Data Protection (UU PDP)** and internationally recognised data protection principles.\n\nThis Policy covers only the personal data we collect through this website. Data processed under separate business or agency agreements is governed by those agreements and their own data-protection terms.`,

    'privacy.s1.title': '1. Data We Collect',
    'privacy.s1.body': `When you submit the contact form, we collect the information you provide:\n\n- Your name\n- Company and jurisdiction\n- Area of interest\n- The content of your message\n\nWe also automatically record limited technical data when you submit the form: an approximate timestamp, the selected interface language, browser user-agent, a randomly generated session identifier, and the IP address seen by our form provider. We do **not** knowingly collect special-category data (health, religion, biometrics) and ask that you do not include such data in free-text fields.`,

    'privacy.s2.title': '2. Why We Process Your Data',
    'privacy.s2.body': `We process your personal data to:\n\n- Respond to and evaluate your enquiry\n- Carry out counterparty due diligence (KYC) and compliance screening\n- Prepare and perform contracts and consulting engagements\n- Keep records required for legal and accounting purposes`,

    'privacy.s3.title': '3. Legal Basis',
    'privacy.s3.body': `We rely on your **consent** (given when you tick the consent box and submit the form), on the necessity of taking **steps prior to entering into a contract** at your request, and on our **legitimate interest** in assessing and conducting business engagements — as permitted under the UU PDP.`,

    'privacy.s4.title': '4. Sharing & International Transfers',
    'privacy.s4.body': `We do not sell your personal data. We share it only with service providers who help us operate this website and communications, and with professional advisers where necessary.\n\nOur contact form is delivered through **Formspree**, a form-processing service operated from the United States, and via our email provider. This means data submitted through the form is transferred to and stored on servers outside Indonesia. We take reasonable steps to ensure such transfers are subject to appropriate safeguards and a level of protection consistent with the UU PDP.`,

    'privacy.s5.title': '5. Data Retention',
    'privacy.s5.body': `We keep personal data only for as long as necessary for the purposes above: enquiry and due-diligence records for up to five (5) years from our last interaction, and contract-related data for the term of the contract plus the applicable limitation period. After that, data is deleted or anonymised.`,

    'privacy.s6.title': '6. Your Rights',
    'privacy.s6.body': `Subject to the UU PDP, you may request to access, correct, update, delete, or restrict the processing of your personal data, withdraw your consent at any time, and object to certain processing. To exercise any of these rights, contact us using the details in Section 9. We respond within the timeframe required by applicable law.`,

    'privacy.s7.title': '7. Cookies & Tracking',
    'privacy.s7.body': `This website does **not** use advertising or tracking cookies. We store a single functional preference (your chosen language) in your browser's local storage so the site remembers your language. No consent banner is required for this strictly functional use.`,

    'privacy.s8.title': '8. Data Security',
    'privacy.s8.body': `We apply technical and organisational measures appropriate to the risk, including encryption in transit (TLS), access on a need-to-know basis, and a prohibition on storing personal data permanently in email or messengers. No method of transmission over the internet is completely secure, but we work to protect your data at all times.`,

    'privacy.s9.title': '9. Contact Us',
    'privacy.s9.body': `For any privacy question or to exercise your rights, contact:\n\n**PT Kusuma Petak Sari (KPS Global)**\nJalan Sidakarya, Denpasar Selatan, Bali 80244, Indonesia\nE-mail: main@kpsglobal.id`,

    'privacy.s10.title': '10. Changes to This Policy',
    'privacy.s10.body': `We review this Policy at least annually and whenever our processing operations or applicable law change. The current version is always available on this page, with the "Last updated" date shown above.`,
  },

  ru: {
    // Nav
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.approach': 'Как мы работаем',
    'nav.sectors': 'Секторы',
    'nav.contact': 'Контакты',

    // Hero
    'hero.badge': 'Независимый консалтинг: операции и сделки',
    'hero.title': 'Операционный партнёр для трансграничных проектов',
    'hero.subtitle':
      'KPS Global помогает основателям и инвесторам структурировать, укомплектовывать и доводить до конца сложные международные сделки и операции — как независимый консультант, а не звено цепочки.',
    'hero.cta': 'Начать разговор',
    'hero.secondaryCta': 'Как мы работаем',
    'hero.reachLabel': 'Рынки присутствия',
    'hero.trust':
      'Fractional COO, структурирование сделок и комплаенс в Сингапуре, Китае, Гонконге, Малайзии, США, ОАЭ, Индии и Индонезии.',

    // About
    'about.sectionLabel': 'Кто мы',
    'about.title': 'Операционная глубина без штата',
    'about.lead':
      'KPS Global — бутиковая консалтинговая практика под руководством команды профессионалов из разных отраслей. Мы встраиваемся в вашу команду и берём на себя операционную и сделочную работу, которая двигает трансграничную сделку или проект от намерения к результату — структурирование, работу с контрагентами, комплаенс и документацию — с дисциплиной внутреннего операционного руководителя и независимостью внешнего советника.',
    'about.team':
      'Ключевая команда из семи человек — специалисты в управленческом менеджменте, финансах, праве, международных поставках, логистике и топливе.',
    'about.clients':
      'Мы работаем с инвесторами, топливными и государственными компаниями, фондами и корпорациями.',
    'stats.since': 'На рынке с',
    'stats.volume': 'Объём сделок за 5 лет',
    'stats.deals': 'Сопровождённых сделок',
    'stats.countries': 'Стран · 5 офисов',
    'about.p1.title': 'Независимость по определению',
    'about.p1.desc':
      'Мы консультируем и координируем — не берём титул на товар, не торгуем на свою книгу и не входим в платёжную цепочку. Мы несём только ваши интересы.',
    'about.p2.title': 'Комплаенс прежде всего',
    'about.p2.desc':
      'Любая работа начинается с KYC, санкционной оценки и юридического структурирования. Если сделку нельзя провести чисто — мы говорим об этом сразу.',
    'about.p3.title': 'Фокус на результате',
    'about.p3.desc':
      'Нас измеряют завершением, а не активностью: подписанные контракты, закрытые сделки и операции, которые продолжают работать после нашего выхода.',
    'about.notLabel': 'Кем мы не являемся',
    'about.notDesc':
      'KPS Global — независимый консультант, а не брокер, трейдер или платёжный агент. Мы остаёмся вне товарной и платёжной цепочки и никогда не храним средства клиентов.',

    // Services
    'services.sectionLabel': 'Что мы делаем',
    'services.title': 'Три формата работы с вами',
    'services.subtitle':
      'От отдельной сделки до постоянного операционного лидерства — объём каждого проекта определяется нужным вам результатом.',

    'services.trade.title': 'Сопровождение трансграничных сделок',
    'services.trade.desc':
      'Независимое структурирование и практическая поддержка международных сделок по поставке и выборке — от первого контакта до подписанного контракта.',
    'services.trade.details':
      'Мы сопровождаем принципалов на всём жизненном цикле трансграничной сделки как независимый консультант: готовим и проверяем документацию, заводим и проверяем контрагентов, ведём переговоры в ваших интересах, структурируем сделку и её контракты. Работаем с энергоносителями и СПГ, цветными металлами и промышленными товарами несанкционного происхождения. Мы никогда не выступаем покупателем, продавцом или платёжным агентом — полный контроль над товаром и средствами остаётся у вас.',

    'services.coo.title': 'Fractional COO и операционное лидерство',
    'services.coo.desc':
      'Старший операционный руководитель на part-time — для проектов, которым нужна исполнительская мощность без найма в штат.',
    'services.coo.details':
      'Мы выступаем вашим Fractional COO: выстраиваем и ведём операции международных проектов — процессы, координацию партнёров и подрядчиков, трансграничные структуры и доведение до результата. Подходит основателям и инвесторам, выходящим на новые рынки (включая реализацию проектов в Индонезии и Юго-Восточной Азии), которым нужно опытное операционное руководство на гибкой основе с ретейнером.',

    'services.compliance.title': 'Комплаенс, KYC и структурирование сделок',
    'services.compliance.desc':
      'Управляющий слой под каждой сделкой: KYC/AML, санкционная оценка, юридическое структурирование и полная документация.',
    'services.compliance.details':
      'Мы строим комплаенс- и юридический каркас вашей сделки: KYC и проверку контрагентов, санкционный скрининг (OFAC, EU, UN, UK), анализ источника средств и юрисдикции, структурирование в соответствии с антикоррупционными стандартами (FCPA, UK Bribery Act) и применимым законодательством о защите данных. Готовим полный пакет контрактов и документации, чтобы сделка выдержала проверку банка или контрагента.',

    'services.process.title': 'Как проходит работа',
    'services.process.step1': 'Диагностика и объём — цели, ограничения и результат, определяющий успех.',
    'services.process.step2': 'KYC и проверка — верификация и скрининг всех сторон до начала взаимодействия.',
    'services.process.step3': 'Структурирование — санкционная, юридическая и коммерческая структура, сохраняющая ваш комплаенс.',
    'services.process.step4': 'Взаимодействие и переговоры — заведение контрагентов и переговоры в ваших интересах.',
    'services.process.step5': 'Документация и передача — полный пакет контрактов, поддержка исполнения и чистая передача.',
    'services.cta': 'Начать разговор',

    // Approach
    'approach.sectionLabel': 'Как мы работаем',
    'approach.title': 'Прозрачная модель работы',
    'approach.subtitle':
      'Каждый проект следует одной дисциплинированной последовательности — вы всегда знаете, что дальше и сколько это стоит.',

    'approach.step1.title': 'Диагностика и объём',
    'approach.step1.desc': 'Разбираем проект, цели и ограничения, затем согласуем чёткий объём и результаты.',

    'approach.step2.title': 'KYC и проверка',
    'approach.step2.desc': 'Сбор и верификация KYC, проверка контрагентов и репутации до любого взаимодействия.',

    'approach.step3.title': 'Санкции и юр-структурирование',
    'approach.step3.desc':
      'Санкционный скрининг (OFAC, EU, UN, UK), анализ источника средств и юрисдикции, структура, сохраняющая комплаенс, — включая несанкционное происхождение там, где это требуется.',

    'approach.step4.title': 'Работа с контрагентами',
    'approach.step4.desc': 'Заводим поставщиков и контрагентов и ведём переговоры от вашего имени и в ваших интересах.',

    'approach.step5.title': 'Структурирование и документация',
    'approach.step5.desc': 'Полное структурирование сделки и весь пакет контрактной и транзакционной документации.',

    'approach.step6.title': 'Поддержка исполнения и закрытие',
    'approach.step6.desc': 'Практическая поддержка на исполнении и закрытии — стороны рассчитываются напрямую; мы координируем, а не посредничаем.',

    'approach.feeTitle': 'Формат и гонорар',
    'approach.feeDesc':
      'Гонорар состоит из фиксированного ретейнера, поэтапных платежей за сданные этапы и вознаграждения за успех по завершении. Ретейнер и поэтапные платежи оплачиваются за оказанные услуги — независимо от итога сделки. Мы не храним средства клиентов и не занимаем позиции в платёжной цепочке.',

    // Sectors
    'sectors.sectionLabel': 'Секторы и охват',
    'sectors.title': 'Где мы работаем',
    'sectors.subtitle': 'Глубокий фокус в нескольких секторах — на коридорах, где реально происходят трансграничные сделки.',

    'sectors.industries.title': 'Секторы',
    'sectors.industries.desc':
      'Энергоносители и СПГ, топливо, цветные металлы (алюминий), промышленные товары (сера), реализация и управление международными проектами.',

    'sectors.geographies.title': 'География',
    'sectors.geographies.desc':
      'Работаем в Сингапуре, Китае, Гонконге, Малайзии, США, ОАЭ, Индии и Индонезии — структурируем проекты, соединяющие юрисдикции, языки и комплаенс-режимы.',
    'sectors.presenceTitle': 'Глобальное присутствие',
    'sectors.officesLabel': 'Офисы',
    'sectors.marketsLabel': 'Рынки, где мы работаем',
    'sectors.entitiesNote': 'Юридические лица в Китае, Индонезии, России и США.',

    // Governance
    'governance.sectionLabel': 'Управление и комплаенс',
    'governance.title': 'Комплаенс — это фундамент, а не формальность',
    'governance.subtitle': 'Стандарты, которые мы применяем в каждом проекте, — причина, по которой наши сделки проходят due diligence.',

    'governance.kyc.title': 'KYC и AML',
    'governance.kyc.desc': 'Проверка личности, структуры владения и источника средств по каждому контрагенту до начала работы.',

    'governance.sanctions.title': 'Санкционный скрининг',
    'governance.sanctions.desc': 'Скрининг OFAC, EU, UN и UK по всем сторонам. Мы отказываемся от сделок с санкционной экспозицией.',

    'governance.anticorruption.title': 'Антикоррупция',
    'governance.anticorruption.desc': 'Поведение в соответствии с FCPA и UK Bribery Act — только законное представление интересов.',

    'governance.data.title': 'Защита данных',
    'governance.data.desc':
      'Персональные данные обрабатываются по UU PDP Индонезии (№ 27/2022) и, где применимо, по Закону РФ № 152-ФЗ.',

    // Contact
    'contact.sectionLabel': 'Контакты',
    'contact.title': 'Начать разговор',
    'contact.subtitle': 'Расскажите о вашем проекте или сделке. Мы отвечаем в течение двух рабочих дней.',

    'contact.name': 'Имя',
    'contact.namePlaceholder': 'ФИО',
    'contact.company': 'Компания и юрисдикция',
    'contact.companyPlaceholder': 'напр. Acme Trading Ltd, Сингапур',
    'contact.area': 'Интересующее направление',
    'contact.areaPlaceholder': 'Выберите направление',
    'contact.areaTrade': 'Сопровождение сделок',
    'contact.areaCOO': 'Fractional COO',
    'contact.areaCompliance': 'Комплаенс и структурирование',
    'contact.areaOther': 'Другое',
    'contact.message': 'Чем можем помочь?',
    'contact.messagePlaceholder': 'Несколько строк о вашем проекте, сделке или цели.',
    'contact.privacyPrefix': 'Я даю согласие на обработку моих персональных данных в соответствии с ',
    'contact.privacyLink': 'Политикой конфиденциальности',
    'contact.privacySuffix': '.',
    'contact.submit': 'Отправить',
    'contact.submitting': 'Отправка…',
    'contact.success': 'Спасибо. Мы ответим в течение двух рабочих дней.',
    'contact.error': 'Не удалось отправить. Попробуйте ещё раз или напишите нам напрямую.',
    'contact.directLabel': 'Или свяжитесь напрямую',
    'contact.emailLabel': 'Email',
    'contact.whatsappLabel': 'WhatsApp',
    'contact.linkedinLabel': 'LinkedIn',

    // Footer
    'footer.companyName': 'KPS Global',
    'footer.tagline': 'Операционный партнёр для трансграничных проектов',
    'footer.registered':
      'KPS Global — торговое название PT Kusuma Petak Sari, консалтинговой компании, зарегистрированной в Индонезии. Мы действуем строго как независимый консультант и координатор — не брокер, не трейдер и не платёжный агент, — остаёмся вне товарной и платёжной цепочки и никогда не храним средства клиентов.',
    'footer.entity': 'PT Kusuma Petak Sari · Management Consulting (KBLI 70209) · NIB 1206250044214',
    'footer.address': 'Jalan Sidakarya, Denpasar Selatan, Bali 80244, Indonesia',
    'footer.staff': 'Для команды',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.rights': 'Все права защищены.',
    'footer.trust1': 'Независимость',
    'footer.trust2': 'Комплаенс прежде всего',
    'footer.trust3': 'Репутация важнее скорости',

    // NotFound
    'notFound.title': 'Страница не найдена',
    'notFound.backHome': 'Вернуться на главную',

    // Privacy Policy
    'privacy.title': 'Политика конфиденциальности',
    'privacy.backHome': 'На главную',
    'privacy.lastUpdatedLabel': 'Последнее обновление',
    'privacy.lastUpdatedDate': '18 июля 2026 г.',
    'privacy.intro': `KPS Global — торговое название **PT Kusuma Petak Sari** («KPS», «мы»), консалтинговой компании, зарегистрированной в Республике Индонезия. Настоящая Политика описывает, как мы обрабатываем персональные данные, собираемые через этот сайт (kpsglobal.id), в соответствии с **Законом Республики Индонезия № 27 от 2022 года о защите персональных данных (UU PDP)** и общепризнанными принципами защиты данных.\n\nПолитика распространяется только на персональные данные, собираемые через этот сайт. Данные, обрабатываемые в рамках отдельных деловых или агентских договоров, регулируются этими договорами и их собственными условиями о защите данных.`,

    'privacy.s1.title': '1. Какие данные мы собираем',
    'privacy.s1.body': `При отправке контактной формы мы собираем предоставленные вами сведения:\n\n- Ваше имя\n- Компания и юрисдикция\n- Интересующее направление\n- Содержание вашего сообщения\n\nМы также автоматически фиксируем ограниченные технические данные при отправке формы: приблизительную отметку времени, выбранный язык интерфейса, user-agent браузера, случайно сгенерированный идентификатор сессии и IP-адрес, видимый нашему провайдеру форм. Мы **не** собираем осознанно специальные категории данных (здоровье, религия, биометрия) и просим не указывать такие данные в свободных полях.`,

    'privacy.s2.title': '2. Цели обработки',
    'privacy.s2.body': `Мы обрабатываем ваши персональные данные, чтобы:\n\n- Рассмотреть и оценить ваш запрос\n- Провести проверку контрагента (KYC) и комплаенс-скрининг\n- Подготовить и исполнить договоры и консультационные соглашения\n- Вести учёт, требуемый законодательством и правилами бухгалтерского учёта`,

    'privacy.s3.title': '3. Правовые основания',
    'privacy.s3.body': `Мы опираемся на ваше **согласие** (даётся при отметке чекбокса и отправке формы), на необходимость совершения **преддоговорных действий** по вашему запросу, а также на наш **законный интерес** в оценке и ведении деловых отношений — как это допускается UU PDP.`,

    'privacy.s4.title': '4. Передача и трансграничность',
    'privacy.s4.body': `Мы не продаём ваши персональные данные. Мы передаём их только поставщикам услуг, помогающим нам работать с этим сайтом и коммуникациями, а также профессиональным консультантам при необходимости.\n\nКонтактная форма обрабатывается через сервис **Formspree** (работает из США) и через нашего email-провайдера. Это означает, что данные, отправленные через форму, передаются и хранятся на серверах за пределами Индонезии. Мы принимаем разумные меры, чтобы такие передачи сопровождались надлежащими гарантиями и уровнем защиты, соответствующим UU PDP.`,

    'privacy.s5.title': '5. Сроки хранения',
    'privacy.s5.body': `Мы храним персональные данные не дольше, чем необходимо для указанных целей: записи по обращениям и проверке контрагентов — до пяти (5) лет с даты последнего взаимодействия; данные, связанные с договорами, — на срок договора плюс применимый срок исковой давности. По истечении этих сроков данные удаляются или обезличиваются.`,

    'privacy.s6.title': '6. Права субъекта данных',
    'privacy.s6.body': `В соответствии с UU PDP вы вправе запросить доступ, исправление, обновление, удаление или ограничение обработки ваших персональных данных, отозвать согласие в любой момент и возражать против отдельных видов обработки. Для реализации любого из этих прав свяжитесь с нами по контактам из Раздела 9. Мы отвечаем в срок, установленный применимым законодательством.`,

    'privacy.s7.title': '7. Cookies и трекинг',
    'privacy.s7.body': `Этот сайт **не** использует рекламные или трекинговые cookie. Мы храним единственную функциональную настройку (выбранный язык) в локальном хранилище браузера, чтобы сайт запоминал ваш язык. Для такого строго функционального использования баннер согласия не требуется.`,

    'privacy.s8.title': '8. Защита данных',
    'privacy.s8.body': `Мы применяем технические и организационные меры, соразмерные рискам: шифрование при передаче (TLS), доступ по принципу необходимости и запрет на постоянное хранение персональных данных в email или мессенджерах. Ни один способ передачи через интернет не является полностью безопасным, но мы стремимся защищать ваши данные во всех случаях.`,

    'privacy.s9.title': '9. Контакты',
    'privacy.s9.body': `По любым вопросам о конфиденциальности или для реализации ваших прав обращайтесь:\n\n**PT Kusuma Petak Sari (KPS Global)**\nJalan Sidakarya, Denpasar Selatan, Bali 80244, Indonesia\nE-mail: main@kpsglobal.id`,

    'privacy.s10.title': '10. Изменения Политики',
    'privacy.s10.body': `Мы пересматриваем настоящую Политику не реже одного раза в год и при изменении наших операций обработки или применимого законодательства. Актуальная версия всегда доступна на этой странице; дата «Последнее обновление» указана выше.`,
  },

  zh: {
    // Nav
    'nav.about': '关于',
    'nav.services': '服务',
    'nav.approach': '合作方式',
    'nav.sectors': '领域',
    'nav.contact': '联系',

    // Hero
    'hero.badge': '独立运营与交易顾问',
    'hero.title': '跨境项目的运营合伙人',
    'hero.subtitle':
      'KPS Global 帮助创始人与投资者构建、组建并执行复杂的国际交易与运营——以独立顾问的身份，而非交易链条中的一环。',
    'hero.cta': '开始沟通',
    'hero.secondaryCta': '了解合作方式',
    'hero.reachLabel': '活跃市场',
    'hero.trust':
      '在新加坡、中国、香港、马来西亚、美国、阿联酋、印度与印度尼西亚提供 Fractional COO、交易结构与合规。',

    // About
    'about.sectionLabel': '关于我们',
    'about.title': '运营深度，无需扩编',
    'about.lead':
      'KPS Global 是一家精品管理咨询机构，由来自不同行业的资深专业团队领导。我们融入您的团队，承担推动跨境交易或项目从意向走向落地的运营与交易工作——结构化、交易对手对接、合规与文档——兼具内部运营者的纪律与外部顾问的独立性。',
    'about.team':
      '七人核心团队——涵盖管理、财务、法律、国际供应、物流与燃料领域的专家。',
    'about.clients':
      '我们的客户包括投资者、燃料与国有企业、基金及企业集团。',
    'stats.since': '成立于',
    'stats.volume': '五年交易额',
    'stats.deals': '完成交易',
    'stats.countries': '国家 · 5 个办公室',
    'about.p1.title': '天生独立',
    'about.p1.desc':
      '我们只提供咨询与协调——不持有货权、不自营交易、不进入支付链条。我们只承载您的利益。',
    'about.p2.title': '合规优先',
    'about.p2.desc':
      '每一次合作都从 KYC、制裁评估与法律结构开始。如果一笔交易无法干净地完成，我们会尽早说明。',
    'about.p3.title': '结果导向',
    'about.p3.desc':
      '衡量我们的是完成度而非活动量：已签合同、已完成交易，以及在我们退出后仍持续运转的运营。',
    'about.notLabel': '我们不是什么',
    'about.notDesc':
      'KPS Global 是独立顾问——不是经纪商、贸易商或支付代理。我们置身于货物与支付链条之外，且从不持有客户资金。',

    // Services
    'services.sectionLabel': '我们做什么',
    'services.title': '三种合作方式',
    'services.subtitle':
      '从单笔交易到常设运营领导——每次合作的范围都以您所需的结果来界定。',

    'services.trade.title': '跨境交易支持',
    'services.trade.desc':
      '为国际供应与承购交易提供独立结构化与全程支持——从首次接触到签署合同。',
    'services.trade.details':
      '作为独立顾问，我们在跨境交易的完整生命周期中支持委托人：准备并核验文档、对接并筛查交易对手、代表您进行谈判、构建交易及其合同。我们涉及能源与 LNG、有色金属及非受制裁来源的工业大宗商品。我们从不担任买方、卖方或支付代理——货物与资金始终由您完全掌控。',

    'services.coo.title': 'Fractional COO 与运营领导',
    'services.coo.desc':
      '为需要执行力却无需全职聘用的项目，提供兼职、资深的运营领导。',
    'services.coo.details':
      '我们以您的 Fractional COO 身份介入，为国际项目搭建并运行运营：建立流程、协调合作伙伴与供应商、搭建跨境结构并推动交付落地。适合进入新市场的创始人与投资者（包括在印度尼西亚与东南亚的项目交付），以灵活的聘用制获得经验丰富的运营领导。',

    'services.compliance.title': '合规、KYC 与交易结构',
    'services.compliance.desc':
      '每笔交易之下的治理层：KYC/AML、制裁审查、法律结构与完整交易文档。',
    'services.compliance.details':
      '我们为您的交易构建合规与法律骨架：KYC 与交易对手尽职调查、制裁筛查（OFAC、EU、UN、UK）、资金来源与管辖权审查，以及符合反贿赂标准（FCPA、UK Bribery Act）与适用数据保护法的结构。我们准备完整的合同与文档，使交易经得起银行或交易对手的审查。',

    'services.process.title': '一次合作如何推进',
    'services.process.step1': '诊断与范围——目标、约束以及定义成功的结果。',
    'services.process.step2': 'KYC 与尽职调查——在任何合作之前核验并筛查所有各方。',
    'services.process.step3': '结构化——让您保持合规的制裁、法律与商业结构。',
    'services.process.step4': '对接与谈判——代表您对接交易对手并进行谈判。',
    'services.process.step5': '文档与交接——完整合同包、执行支持与干净交接。',
    'services.cta': '开始沟通',

    // Approach
    'approach.sectionLabel': '合作方式',
    'approach.title': '透明的合作模式',
    'approach.subtitle':
      '每次合作都遵循同一套严谨的顺序，让您始终清楚下一步是什么、成本几何。',

    'approach.step1.title': '诊断与范围',
    'approach.step1.desc': '梳理项目、目标与约束，然后就清晰的范围与交付成果达成一致。',

    'approach.step2.title': 'KYC 与尽职调查',
    'approach.step2.desc': '在任何合作之前，收集并核验 KYC、交易对手与背景审查。',

    'approach.step3.title': '制裁与法律结构',
    'approach.step3.desc':
      '制裁筛查（OFAC、EU、UN、UK）、资金来源与管辖权审查，以及保持合规的结构——包括在需要时采用非受制裁来源。',

    'approach.step4.title': '交易对手对接',
    'approach.step4.desc': '我们对接供应商与交易对手，并代表您、为您的利益进行谈判。',

    'approach.step5.title': '结构化与文档',
    'approach.step5.desc': '完整的交易结构以及全套合同与交易文档。',

    'approach.step6.title': '执行支持与交割',
    'approach.step6.desc': '在执行与交割中提供全程支持——各方直接交易；我们协调而非居间。',

    'approach.feeTitle': '合作与费用',
    'approach.feeDesc':
      '费用由固定聘金、按已交付阶段计的里程碑费用，以及完成时的成功费组成。聘金与里程碑费用按已交付的工作收取——与最终交易结果无关。我们不持有客户资金，也不在支付链条中占据任何头寸。',

    // Sectors
    'sectors.sectionLabel': '领域与覆盖',
    'sectors.title': '我们的业务地域',
    'sectors.subtitle': '在少数领域深耕——聚焦于跨境交易真正发生的走廊。',

    'sectors.industries.title': '领域',
    'sectors.industries.desc':
      '能源与 LNG、燃料、有色金属（铝）、工业大宗商品（硫磺），以及国际项目交付与管理。',

    'sectors.geographies.title': '地域',
    'sectors.geographies.desc':
      '活跃于新加坡、中国、香港、马来西亚、美国、阿联酋、印度与印度尼西亚——构建横跨司法辖区、语言与合规体系的合作。',
    'sectors.presenceTitle': '全球布局',
    'sectors.officesLabel': '办公室',
    'sectors.marketsLabel': '服务市场',
    'sectors.entitiesNote': '在中国、印度尼西亚、俄罗斯与美国设有注册实体。',

    // Governance
    'governance.sectionLabel': '治理与合规',
    'governance.title': '合规是根基，而非事后补救',
    'governance.subtitle': '我们在每次合作中都坚持的标准——正是我们的交易能够经受尽职调查的原因。',

    'governance.kyc.title': 'KYC 与 AML',
    'governance.kyc.desc': '在合作前对每个交易对手进行身份、股权与资金来源核查。',

    'governance.sanctions.title': '制裁筛查',
    'governance.sanctions.desc': '对所有各方进行 OFAC、EU、UN 与 UK 筛查。存在制裁风险的合作，我们拒绝或退出。',

    'governance.anticorruption.title': '反贿赂',
    'governance.anticorruption.desc': '行为符合 FCPA 与 UK Bribery Act——仅进行合法的利益代表。',

    'governance.data.title': '数据保护',
    'governance.data.desc':
      '个人数据依据印度尼西亚 UU PDP（第 27/2022 号）处理，并在适用时依据俄罗斯第 152-FZ 号法律。',

    // Contact
    'contact.sectionLabel': '联系',
    'contact.title': '开始沟通',
    'contact.subtitle': '告诉我们您的项目或交易。我们将在两个工作日内回复。',

    'contact.name': '姓名',
    'contact.namePlaceholder': '全名',
    'contact.company': '公司与管辖区',
    'contact.companyPlaceholder': '例如 Acme Trading Ltd, 新加坡',
    'contact.area': '关注方向',
    'contact.areaPlaceholder': '选择方向',
    'contact.areaTrade': '交易支持',
    'contact.areaCOO': 'Fractional COO',
    'contact.areaCompliance': '合规与结构化',
    'contact.areaOther': '其他',
    'contact.message': '我们能如何帮助您？',
    'contact.messagePlaceholder': '用几行文字描述您的项目、交易或目标。',
    'contact.privacyPrefix': '我同意根据',
    'contact.privacyLink': '隐私政策',
    'contact.privacySuffix': '处理我的个人数据。',
    'contact.submit': '发送',
    'contact.submitting': '发送中…',
    'contact.success': '感谢您。我们将在两个工作日内回复。',
    'contact.error': '发送失败。请重试或直接给我们发送邮件。',
    'contact.directLabel': '或直接联系我们',
    'contact.emailLabel': '邮箱',
    'contact.whatsappLabel': 'WhatsApp',
    'contact.linkedinLabel': 'LinkedIn',

    // Footer
    'footer.companyName': 'KPS Global',
    'footer.tagline': '跨境项目的运营合伙人',
    'footer.registered':
      'KPS Global 是 PT Kusuma Petak Sari 的商业名称，该公司是一家在印度尼西亚注册的管理咨询公司。我们严格作为独立顾问与协调方开展业务——不是经纪商、贸易商或支付代理——置身于货物与支付链条之外，且从不持有客户资金。',
    'footer.entity': 'PT Kusuma Petak Sari · 管理咨询 (KBLI 70209) · NIB 1206250044214',
    'footer.address': 'Jalan Sidakarya, Denpasar Selatan, Bali 80244, Indonesia',
    'footer.staff': '团队入口',
    'footer.privacy': '隐私政策',
    'footer.rights': '版权所有。',
    'footer.trust1': '独立',
    'footer.trust2': '合规优先',
    'footer.trust3': '声誉重于速度',

    // NotFound
    'notFound.title': '页面未找到',
    'notFound.backHome': '返回首页',

    // Privacy Policy
    'privacy.title': '隐私政策',
    'privacy.backHome': '返回首页',
    'privacy.lastUpdatedLabel': '最后更新',
    'privacy.lastUpdatedDate': '2026年7月18日',
    'privacy.intro': `KPS Global 是 **PT Kusuma Petak Sari**（"KPS"、"我们"）的商业名称，该公司是一家在印度尼西亚共和国注册的管理咨询公司。本政策说明我们如何处理通过本网站（kpsglobal.id）收集的个人数据，依据 **印度尼西亚共和国 2022 年第 27 号个人数据保护法（UU PDP）** 及国际公认的数据保护原则。\n\n本政策仅涵盖我们通过本网站收集的个人数据。在单独的业务或代理协议下处理的数据，受这些协议及其各自的数据保护条款约束。`,

    'privacy.s1.title': '1. 我们收集的数据',
    'privacy.s1.body': `当您提交联系表单时，我们收集您提供的信息：\n\n- 您的姓名\n- 公司与管辖区\n- 关注方向\n- 您的留言内容\n\n当您提交表单时，我们还会自动记录有限的技术数据：大致时间戳、所选界面语言、浏览器 user-agent、随机生成的会话标识符，以及我们表单服务商可见的 IP 地址。我们**不会**有意收集特殊类别数据（健康、宗教、生物识别），并请您不要在自由文本字段中填写此类数据。`,

    'privacy.s2.title': '2. 处理目的',
    'privacy.s2.body': `我们处理您的个人数据用于：\n\n- 回复并评估您的咨询\n- 开展交易对手尽职调查（KYC）与合规筛查\n- 准备并履行合同及咨询业务\n- 保存法律和会计所需的记录`,

    'privacy.s3.title': '3. 法律依据',
    'privacy.s3.body': `我们依据您的**同意**（在您勾选同意框并提交表单时给出）、依据您请求下签订合同前采取**必要步骤**的需要，以及我们评估和开展业务的**合法利益**——均在 UU PDP 允许的范围内。`,

    'privacy.s4.title': '4. 共享与跨境传输',
    'privacy.s4.body': `我们不出售您的个人数据。我们仅与协助我们运营本网站和通讯的服务提供商，以及必要时的专业顾问共享数据。\n\n我们的联系表单通过 **Formspree**（一家在美国运营的表单处理服务）及我们的电子邮件服务商传递。这意味着通过表单提交的数据会被传输并存储在印度尼西亚境外的服务器上。我们采取合理措施，确保此类传输受到适当保障，其保护水平与 UU PDP 一致。`,

    'privacy.s5.title': '5. 数据保留',
    'privacy.s5.body': `我们仅在实现上述目的所必需的期间内保留个人数据：咨询和尽职调查记录自我们最后一次互动起最多保留五（5）年；与合同相关的数据保留至合同期限加适用的时效期。之后，数据将被删除或匿名化。`,

    'privacy.s6.title': '6. 您的权利',
    'privacy.s6.body': `根据 UU PDP，您可以请求访问、更正、更新、删除或限制处理您的个人数据，随时撤回同意，并反对某些处理。要行使上述任何权利，请通过第 9 节中的联系方式与我们联系。我们将在适用法律要求的期限内答复。`,

    'privacy.s7.title': '7. Cookies 与跟踪',
    'privacy.s7.body': `本网站**不**使用广告或跟踪 Cookie。我们仅在您浏览器的本地存储中保存一项功能性偏好（您选择的语言），以便网站记住您的语言。此类严格功能性用途无需同意横幅。`,

    'privacy.s8.title': '8. 数据安全',
    'privacy.s8.body': `我们采取与风险相称的技术和组织措施，包括传输加密（TLS）、按需知密的访问原则，以及禁止将个人数据长期存储在电子邮件或即时通讯工具中。互联网上没有任何传输方式是完全安全的，但我们始终致力于保护您的数据。`,

    'privacy.s9.title': '9. 联系我们',
    'privacy.s9.body': `如有任何隐私问题或需行使您的权利，请联系：\n\n**PT Kusuma Petak Sari (KPS Global)**\nJalan Sidakarya, Denpasar Selatan, Bali 80244, Indonesia\n电子邮件：main@kpsglobal.id`,

    'privacy.s10.title': '10. 本政策的变更',
    'privacy.s10.body': `我们至少每年审查一次本政策，并在我们的处理操作或适用法律发生变化时进行审查。最新版本始终可在本页面查看，上方显示"最后更新"日期。`,
  },
};
