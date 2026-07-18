export type Language = 'en' | 'ru' | 'zh';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.philosophy': 'Philosophy',
    'nav.services': 'Services',
    'nav.capabilities': 'Capabilities',
    'nav.algorithm': 'The Algorithm',
    'nav.mandate': 'Submit Mandate',

    // Hero
    'hero.title': 'Structuring the Essence of Global Trade',
    'hero.subtitle': 'Private Deal Architecture at the intersection of resource, logistics, and compliance.',
    'hero.cta': 'Submit a Mandate',
    'hero.since': 'Operational since 2017',

    // Philosophy
    'philosophy.sectionLabel': 'The Triple Meaning',
    'philosophy.title': 'Philosophy of the Name',
    'philosophy.subtitle': 'Every word in Kusuma Petak Sari carries a deliberate meaning that defines how we operate.',

    'philosophy.kusuma.title': 'Kusuma',
    'philosophy.kusuma.meaning': 'The Flower',
    'philosophy.kusuma.desc': 'Noble growth and integrity. Like the daisy—symmetrical, unadorned, and resilient. We believe in organic, principled expansion.',

    'philosophy.petak.title': 'Petak',
    'philosophy.petak.meaning': 'The Desk',
    'philosophy.petak.desc': 'Rigid structure, defined zones, and zero market noise. Every transaction is compartmentalized, measured, and controlled.',

    'philosophy.sari.title': 'Sari',
    'philosophy.sari.meaning': 'The Essence',
    'philosophy.sari.desc': 'Focusing only on the core result—successful delivery. We strip away distractions and concentrate on what matters.',

    // Services
    'services.sectionLabel': 'Service Verticals',
    'services.title': 'Strategic Sourcing & Transaction Architecture',
    'services.subtitle': 'Structured access to primary commodity markets through verified supply chains and institutional-grade procedures.',

    'services.energy.title': 'Energy & Fuel',
    'services.energy.desc': 'EN590 (10ppm) diesel and Jet A1 aviation fuel. Refinery-direct supply chains with verified documentation at every step.',
    'services.energy.details': 'EN590 (10ppm diesel) and Jet A1 aviation fuel. Refinery-direct supply chains with structured documentation and delivery protocols for institutional clients. Every counterparty passes sanctions and KYC screening before engagement.',

    'services.gas.title': 'Gas (LNG/LPG)',
    'services.gas.desc': 'LNG and LPG project-based supply. Long-term contractual frameworks for institutional buyers.',
    'services.gas.details': 'LNG and LPG supply under dual-contract structure: FOB commodity contract plus a separate logistics contract. Full price transparency and project-based volumes for institutional buyers.',

    'services.metals.title': 'Strategic Metals',
    'services.metals.desc': 'Aluminum and sulphur contractual supply. Standardized delivery protocols with full compliance documentation.',
    'services.metals.details': 'Aluminum and sulphur contractual supply from non-sanctioned origins. Standardized delivery protocols with full compliance documentation. Settlement and title transfer coordinated through licensed banks and independent escrow agents.',

    'services.algorithm.title': 'The KPS Algorithm',
    'services.algorithm.step1': 'Screening: Entity verification, compliance check, and background assessment.',
    'services.algorithm.step2': 'Structure: LOI, ICPO, and financial readiness verification (POF/BCL/SBLC).',
    'services.algorithm.step3': 'Compliance: KYC/AML procedures, sanctions screening (OFAC, EU, UN, UK), UBO verification, Source of Funds analysis and jurisdiction check.',
    'services.algorithm.step4': 'Mandate: Contract terms, payment mechanisms, and logistics planning.',
    'services.algorithm.step5': 'Execution: TCIA signing, inspection, title transfer, and payment settlement.',

    // Capabilities
    'capabilities.sectionLabel': 'Capabilities',
    'capabilities.title': 'Transaction Architecture',
    'capabilities.subtitle': 'Beyond brokerage—we architect the entire transaction lifecycle.',

    'capabilities.paymaster.title': 'Transaction Lifecycle Coordination',
    'capabilities.paymaster.desc': 'KPS coordinates the entire transaction lifecycle as an independent consultant: settlement discipline through licensed banks and independent escrow agents, document verification, and financial workflow compliance. KPS never holds client funds.',

    'capabilities.investment.title': 'Investment Models',
    'capabilities.investment.desc': 'Financial analysis and investment modeling for international trade. Structured deal frameworks with risk-adjusted returns.',

    // Algorithm
    'algorithm.sectionLabel': 'Process',
    'algorithm.title': 'The Algorithm',
    'algorithm.subtitle': 'Our non-negotiable strict order of work. Every transaction follows this sequence without exception.',

    'algorithm.step1.title': 'Initial Screening',
    'algorithm.step1.desc': 'Entity verification, compliance check, and background assessment.',

    'algorithm.step2.title': 'Documentation',
    'algorithm.step2.desc': 'LOI, ICPO, and financial readiness verification (POF/BCL/SBLC).',

    'algorithm.step3.title': 'Compliance Review',
    'algorithm.step3.desc': 'KYC/AML procedures, sanctions screening (OFAC, EU, UN, UK), UBO verification, Source of Funds analysis and jurisdiction check.',

    'algorithm.step4.title': 'Deal Structuring',
    'algorithm.step4.desc': 'Contract terms, payment mechanisms, and logistics planning.',

    'algorithm.step5.title': 'TCIA Signing',
    'algorithm.step5.desc': 'TCIA execution between all parties.',

    'algorithm.step6.title': 'Final Delivery',
    'algorithm.step6.desc': 'Execution, inspection, title transfer, and payment settlement.',

    // Mandate Form
    'mandate.sectionLabel': 'Engagement',
    'mandate.title': 'Submit a Mandate',
    'mandate.subtitle': 'Begin the engagement process. All submissions are reviewed within 48 business hours.',

    'mandate.entity': 'Entity Name & Jurisdiction',
    'mandate.entityPlaceholder': 'e.g. Acme Trading Ltd, Singapore',
    'mandate.role': 'Role',
    'mandate.rolePlaceholder': 'Select your role',
    'mandate.roleEndBuyer': 'End Buyer',
    'mandate.roleMandate': 'Mandate',
    'mandate.roleIntermediary': 'Intermediary',
    'mandate.commodity': 'Commodity Interest',
    'mandate.commodityPlaceholder': 'Select commodity',
    'mandate.commodityEN590': 'EN590 (10ppm)',
    'mandate.commodityJetA1': 'Jet A1',
    'mandate.commodityLNG': 'LNG',
    'mandate.commodityLPG': 'LPG',
    'mandate.commodityAluminum': 'Aluminum',
    'mandate.commoditySulphur': 'Sulphur',
    'mandate.financial': 'Financial Logistics Readiness',
    'mandate.financialPlaceholder': 'Select instrument',
    'mandate.financialPOF': 'Proof of Funds (POF)',
    'mandate.financialBCL': 'Bank Comfort Letter (BCL)',
    'mandate.financialSBLC': 'Standby Letter of Credit (SBLC)',
    'mandate.contactPerson': 'Contact Person',
    'mandate.contactPersonPlaceholder': 'Full name',
    'mandate.contactChannel': 'WhatsApp / Telegram / Phone',
    'mandate.contactChannelPlaceholder': 'e.g. +62 000 000 0000',
    'mandate.agreePrefix': 'I agree to follow the ',
    'mandate.agreeLink': 'KPS non-negotiable algorithm',
    'mandate.agreeSuffix': '.',
    'mandate.privacyConsentPrefix': 'I consent to the processing of my personal data in accordance with the ',
    'mandate.privacyConsentLink': 'Privacy Policy',
    'mandate.privacyConsentSuffix': '.',
    'mandate.acceptTerms': 'I Agree',
    'mandate.downloadPdf': 'Download PDF Version',
    'algorithm.termsFull': `KPS GLOBAL SOLUTIONS: TERMS OF SERVICE & TRANSACTION ALGORITHM

LEGAL NOTICE & BINDING AGREEMENT

By clicking "I Agree" or proceeding to request services, you (the "Client") acknowledge and irrevocably agree to the following Non-Negotiable Algorithm and Fee Protection terms established by PT Kusuma Petak Sari (the "Consultant"):

1. Strict Procedural Sequence: All transactions follow the KPS Algorithm: Technical Assignment (ICPO) → TCIA/Consulting Agreement Execution → Conditional Disclosure. No sensitive data, supplier identities, or draft SPAs shall be released prior to the execution of a formal mandate and/or payment of the initial consulting fee.

2. Irrevocable Fee Protection: The Client guarantees the payment of the Success Fee (Commission) for every shipment, rollover, or extension of the contract facilitated by the Consultant.

3. Non-Circumvention: The Client shall not, under any circumstances, contact, negotiate, or conclude transactions with any Introduced Party (Suppliers, Refineries, or Mandates) without the prior written consent of the Consultant. This protection remains in force for two (2) years globally.

4. Sanctions & Export Controls: The Consultant engages exclusively in transactions involving non-sanctioned goods and counterparties. All parties undergo KYC/AML and sanctions screening (OFAC, EU, UN, UK) prior to any engagement. The Consultant reserves the right to decline or terminate any engagement presenting sanctions exposure, without liability.

5. Liquidated Damages: Any breach of the non-circumvention or payment clauses shall trigger liquidated damages as specified in the executed TCIA / Consulting Agreement.

6. Jurisdiction: These terms are governed by the laws of Hong Kong. Any disputes shall be resolved via ICC Arbitration in Hong Kong.`,
    'algorithm.termsTitle': 'KPS GLOBAL SOLUTIONS: TERMS OF SERVICE & TRANSACTION ALGORITHM',
    'algorithm.scrollHint': 'Scroll to the end to enable the Accept button.',
    'mandate.submit': 'Request a Strategic Briefing',
    'mandate.submitting': 'Sending…',
    'mandate.success': 'Mandate submitted. We will review within 48 business hours.',
    'mandate.error': 'Failed to send. Please try again or contact us directly.',

    // Footer
    'footer.companyName': 'KPS Global Solutions',
    'footer.tagline': 'Structuring the Essence of Global Trade',
    'footer.registered': 'KPS Global Solutions is a trade name of PT Kusuma Petak Sari, a management consulting firm registered in Indonesia. We do not provide regulated financial, banking, or money transfer services, and we never hold client funds. We act strictly as a transaction coordinator and consultant, working exclusively with non-sanctioned goods and screened counterparties.',
    'footer.staff': 'Team Access',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': 'All rights reserved.',
    'footer.zeroNoise': 'Zero Noise',
    'footer.noToxic': 'No Toxic Chains',
    'footer.reputation': 'Reputation over Speed',

    // History
    'history.badge': 'Since 2017',
    'history.text': 'From BRIK to KPS, our journey refined what matters. Kusuma Petak Sari is the distilled identity—pure structure, zero noise.',

    // NotFound
    'notFound.title': 'Oops! Page not found',
    'notFound.backHome': 'Return to Home',

    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.backHome': 'Back to Home',
    'privacy.lastUpdatedLabel': 'Last updated',
    'privacy.lastUpdatedDate': '18 July 2026',
    'privacy.intro': `KPS Global Solutions is a trade name of **PT Kusuma Petak Sari** ("KPS", "we", "us"), a management consulting firm registered in the Republic of Indonesia. This Policy explains how we handle personal data collected through this website (kpsglobal.id), in line with **Law of the Republic of Indonesia No. 27 of 2022 on Personal Data Protection (UU PDP)** and internationally recognised data protection principles.\n\nThis Policy covers only the personal data we collect through this website. Data processed under separate business or agency agreements is governed by those agreements and their own data-protection terms.`,

    'privacy.s1.title': '1. Data We Collect',
    'privacy.s1.body': `When you submit the mandate / strategic briefing form, we collect the information you provide:\n\n- Entity name and jurisdiction\n- Your role (end buyer, mandate, or intermediary)\n- Commodity of interest\n- Financial-readiness instrument (POF / BCL / SBLC)\n- Contact person's full name\n- Contact channel (WhatsApp, Telegram, or phone number)\n\nWe also automatically record limited technical data when you submit a form or accept our terms: an approximate timestamp, the selected interface language, browser user-agent, a randomly generated session identifier, and the IP address seen by our form provider. We do **not** knowingly collect special-category data (health, religion, biometrics) and ask that you do not include such data in free-text fields.`,

    'privacy.s2.title': '2. Why We Process Your Data',
    'privacy.s2.body': `We process your personal data to:\n\n- Respond to and evaluate your mandate or briefing request\n- Carry out counterparty due diligence (KYC) and compliance screening\n- Prepare and perform contracts and consulting engagements\n- Keep records required for legal and accounting purposes`,

    'privacy.s3.title': '3. Legal Basis',
    'privacy.s3.body': `We rely on your **consent** (given when you tick the consent box and submit the form), on the necessity of taking **steps prior to entering into a contract** at your request, and on our **legitimate interest** in assessing and conducting business engagements — as permitted under the UU PDP.`,

    'privacy.s4.title': '4. Sharing & International Transfers',
    'privacy.s4.body': `We do not sell your personal data. We share it only with service providers who help us operate this website and communications, and with professional advisers where necessary.\n\nOur mandate form is delivered through **Formspree**, a form-processing service operated from the United States, and via our email provider. This means data submitted through the form is transferred to and stored on servers outside Indonesia. We take reasonable steps to ensure such transfers are subject to appropriate safeguards and a level of protection consistent with the UU PDP.`,

    'privacy.s5.title': '5. Data Retention',
    'privacy.s5.body': `We keep personal data only for as long as necessary for the purposes above: enquiry and due-diligence records for up to five (5) years from our last interaction, and contract-related data for the term of the contract plus the applicable limitation period. After that, data is deleted or anonymised.`,

    'privacy.s6.title': '6. Your Rights',
    'privacy.s6.body': `Subject to the UU PDP, you may request to access, correct, update, delete, or restrict the processing of your personal data, withdraw your consent at any time, and object to certain processing. To exercise any of these rights, contact us using the details in Section 9. We respond within the timeframe required by applicable law.`,

    'privacy.s7.title': '7. Cookies & Tracking',
    'privacy.s7.body': `This website does **not** use advertising or tracking cookies. We store a single functional preference (your chosen language) in your browser's local storage so the site remembers your language. No consent banner is required for this strictly functional use.`,

    'privacy.s8.title': '8. Data Security',
    'privacy.s8.body': `We apply technical and organisational measures appropriate to the risk, including encryption in transit (TLS), access on a need-to-know basis, and a prohibition on storing personal data permanently in email or messengers. No method of transmission over the internet is completely secure, but we work to protect your data at all times.`,

    'privacy.s9.title': '9. Contact Us',
    'privacy.s9.body': `For any privacy question or to exercise your rights, contact:\n\n**PT Kusuma Petak Sari (KPS Global Solutions)**\nAddress: Denpasar, Bali, Indonesia\nE-mail: mnc@kpsglobal.id`,

    'privacy.s10.title': '10. Changes to This Policy',
    'privacy.s10.body': `We review this Policy at least annually and whenever our processing operations or applicable law change. The current version is always available on this page, with the "Last updated" date shown above.`,
  },

  ru: {
    'nav.philosophy': 'Философия',
    'nav.services': 'Услуги',
    'nav.capabilities': 'Возможности',
    'nav.algorithm': 'Алгоритм',
    'nav.mandate': 'Подать мандат',

    'hero.title': 'Структурируя суть глобальной торговли',
    'hero.subtitle': 'Частная архитектура сделок на пересечении ресурсов, логистики и комплаенса.',
    'hero.cta': 'Подать мандат',
    'hero.since': 'Работаем с 2017 года',

    'philosophy.sectionLabel': 'Тройной смысл',
    'philosophy.title': 'Философия имени',
    'philosophy.subtitle': 'Каждое слово в Kusuma Petak Sari несёт осознанный смысл, определяющий наш подход.',

    'philosophy.kusuma.title': 'Kusuma',
    'philosophy.kusuma.meaning': 'Цветок',
    'philosophy.kusuma.desc': 'Благородный рост и целостность. Как ромашка — симметричная, простая и стойкая. Мы верим в органичное, принципиальное развитие.',

    'philosophy.petak.title': 'Petak',
    'philosophy.petak.meaning': 'Стол',
    'philosophy.petak.desc': 'Жёсткая структура, чёткие зоны и нулевой рыночный шум. Каждая сделка изолирована, измерена и контролируема.',

    'philosophy.sari.title': 'Sari',
    'philosophy.sari.meaning': 'Суть',
    'philosophy.sari.desc': 'Фокус только на главном результате — успешной поставке. Мы убираем отвлечения и концентрируемся на сути.',

    'services.sectionLabel': 'Направления',
    'services.title': 'Стратегический поиск и архитектура транзакций',
    'services.subtitle': 'Структурированный доступ к первичным товарным рынкам через верифицированные цепочки поставок.',

    'services.energy.title': 'Энергоносители',
    'services.energy.desc': 'Дизель EN590 (10ppm) и авиатопливо Jet A1. Прямые цепочки поставок от НПЗ с верифицированной документацией на каждом шаге.',
    'services.energy.details': 'Дизель EN590 (10ppm) и авиатопливо Jet A1. Прямые цепочки поставок от НПЗ, структурированная документация и протоколы поставки для институциональных клиентов. Каждый контрагент проходит санкционный и KYC-скрининг до начала работы.',

    'services.gas.title': 'Газ (СПГ/СУГ)',
    'services.gas.desc': 'Проектные поставки СПГ и СУГ. Долгосрочные контрактные рамки для институциональных покупателей.',
    'services.gas.details': 'Поставки СПГ и СУГ по двухконтрактной структуре: контракт FOB на товар плюс отдельный контракт на логистику. Полная ценовая прозрачность и проектные объёмы для институциональных покупателей.',

    'services.metals.title': 'Стратегические металлы',
    'services.metals.desc': 'Контрактные поставки алюминия и серы. Стандартизированные протоколы поставки с полной комплаенс-документацией.',
    'services.metals.details': 'Контрактные поставки алюминия и серы несанкционного происхождения. Стандартизированные протоколы поставки с полной комплаенс-документацией. Расчёты и передача титула — через лицензированные банки и независимых эскроу-агентов.',

    'services.algorithm.title': 'Алгоритм KPS',
    'services.algorithm.step1': 'Скрининг: Верификация компании, проверка комплаенса и оценка репутации.',
    'services.algorithm.step2': 'Структура: LOI, ICPO и верификация финансовой готовности (POF/BCL/SBLC).',
    'services.algorithm.step3': 'Комплаенс: Процедуры KYC/AML, санкционный скрининг (OFAC, EU, UN, UK), проверка UBO, анализ источников средств и проверка юрисдикции.',
    'services.algorithm.step4': 'Мандат: Условия контракта, платёжные механизмы и логистическое планирование.',
    'services.algorithm.step5': 'Исполнение: Подписание TCIA, инспекция, передача титула и расчёт.',

    'capabilities.sectionLabel': 'Возможности',
    'capabilities.title': 'Архитектура сделок',
    'capabilities.subtitle': 'Больше чем брокеридж — мы проектируем весь жизненный цикл транзакции.',

    'capabilities.paymaster.title': 'Координация жизненного цикла транзакции',
    'capabilities.paymaster.desc': 'KPS координирует весь жизненный цикл сделки как независимый консультант: расчётная дисциплина через лицензированные банки и независимых эскроу-агентов, проверка документов и соблюдение финансовых процедур. KPS не хранит средства клиентов.',

    'capabilities.investment.title': 'Инвестиционные модели',
    'capabilities.investment.desc': 'Финансовый анализ и инвестиционное моделирование для международной торговли. Структурированные сделки с оптимизированным риском.',

    'algorithm.sectionLabel': 'Процесс',
    'algorithm.title': 'Алгоритм',
    'algorithm.subtitle': 'Наш безусловный порядок работы. Каждая транзакция следует этой последовательности без исключений.',

    'algorithm.step1.title': 'Первичная проверка',
    'algorithm.step1.desc': 'Верификация компании, проверка комплаенса и оценка репутации.',

    'algorithm.step2.title': 'Документация',
    'algorithm.step2.desc': 'LOI, ICPO и верификация финансовой готовности (POF/BCL/SBLC).',

    'algorithm.step3.title': 'Комплаенс-ревью',
    'algorithm.step3.desc': 'Процедуры KYC/AML, санкционный скрининг (OFAC, EU, UN, UK), проверка UBO, анализ источников средств и проверка юрисдикции.',

    'algorithm.step4.title': 'Структурирование сделки',
    'algorithm.step4.desc': 'Условия контракта, платёжные механизмы и логистическое планирование.',

    'algorithm.step5.title': 'Подписание TCIA',
    'algorithm.step5.desc': 'Исполнение  cоглашения TCIA между всеми сторонами.',

    'algorithm.step6.title': 'Финальная поставка',
    'algorithm.step6.desc': 'Исполнение, инспекция, передача титула и расчёт.',

    'mandate.sectionLabel': 'Вовлечение',
    'mandate.title': 'Подать мандат',
    'mandate.subtitle': 'Начните процесс взаимодействия. Все заявки рассматриваются в течение 48 рабочих часов.',

    'mandate.entity': 'Название компании и юрисдикция',
    'mandate.entityPlaceholder': 'напр. Acme Trading Ltd, Сингапур',
    'mandate.role': 'Роль',
    'mandate.rolePlaceholder': 'Выберите вашу роль',
    'mandate.roleEndBuyer': 'Конечный покупатель',
    'mandate.roleMandate': 'Мандат',
    'mandate.roleIntermediary': 'Посредник',
    'mandate.commodity': 'Интересующий товар',
    'mandate.commodityPlaceholder': 'Выберите товар',
    'mandate.commodityEN590': 'EN590 (10ppm)',
    'mandate.commodityJetA1': 'Jet A1',
    'mandate.commodityLNG': 'СПГ',
    'mandate.commodityLPG': 'СУГ',
    'mandate.commodityAluminum': 'Алюминий',
    'mandate.commoditySulphur': 'Сера',
    'mandate.financial': 'Финансовая готовность',
    'mandate.financialPlaceholder': 'Выберите инструмент',
    'mandate.financialPOF': 'Подтверждение средств (POF)',
    'mandate.financialBCL': 'Банковское письмо (BCL)',
    'mandate.financialSBLC': 'Резервный аккредитив (SBLC)',
    'mandate.contactPerson': 'Контактное лицо',
    'mandate.contactPersonPlaceholder': 'ФИО',
    'mandate.contactChannel': 'WhatsApp / Telegram / Телефон',
    'mandate.contactChannelPlaceholder': 'напр. +62 000 000 0000',
    'mandate.agreePrefix': 'Я согласен следовать ',
    'mandate.agreeLink': 'безусловному алгоритму KPS',
    'mandate.agreeSuffix': '.',
    'mandate.privacyConsentPrefix': 'Я даю согласие на обработку моих персональных данных в соответствии с ',
    'mandate.privacyConsentLink': 'Политикой конфиденциальности',
    'mandate.privacyConsentSuffix': '.',
    'mandate.acceptTerms': 'Согласен',
    'mandate.downloadPdf': 'Скачать PDF-версию',
    'algorithm.termsFull': `KPS GLOBAL SOLUTIONS: УСЛОВИЯ ИСПОЛЬЗОВАНИЯ И ТРАНЗАКЦИОННЫЙ АЛГОРИТМ

ЮРИДИЧЕСКОЕ УВЕДОМЛЕНИЕ И ОБЯЗАТЕЛЬНОЕ СОГЛАШЕНИЕ

Нажимая «Согласен» или переходя к запросу услуг, вы («Клиент») подтверждаете и безотзывно соглашаетесь со следующим «Алгоритмом работы» и условиями «Защиты гонорара», установленными PT Kusuma Petak Sari («Консультант»):

1. Строгая последовательность процедур: Все сделки следуют Алгоритму KPS: Техническое задание (ICPO) → Подписание TCIA/Консалтингового соглашения → Условное раскрытие информации. Никакие конфиденциальные данные, личности поставщиков или проекты SPA не подлежат раскрытию до подписания формального мандата и/или оплаты первичного консультационного сбора.

2. Безотзывная защита гонорара: Клиент гарантирует выплату Гонорара за успех (Комиссии) за каждую отгрузку, пролонгацию или продление контракта, организованного при содействии Консультанта.

3. Запрет на обход (Non-Circumvention): Клиент обязуется ни при каких обстоятельствах не вступать в контакт, не вести переговоры и не заключать сделки с любой Представленной стороной (Поставщиками, НПЗ или мандатами) без предварительного письменного согласия Консультанта. Данная защита действует в течение двух (2) лет по всему миру.

4. Санкции и экспортный контроль: Консультант работает исключительно со сделками по несанкционным товарам и с несанкционными контрагентами. Все стороны проходят KYC/AML и санкционный скрининг (OFAC, EU, UN, UK) до начала взаимодействия. Консультант оставляет за собой право отказаться от любой сделки с санкционной экспозицией без какой-либо ответственности.

5. Штрафные санкции: Любое нарушение пунктов об обходе или невыплате влечёт ответственность в размере, установленном подписанным TCIA / Консалтинговым соглашением.

6. Юрисдикция: Настоящие условия регулируются законодательством Гонконга. Любые споры подлежат разрешению через арбитраж ICC в Гонконге.`,
    'algorithm.termsTitle': 'KPS GLOBAL SOLUTIONS: УСЛОВИЯ ИСПОЛЬЗОВАНИЯ И ТРАНЗАКЦИОННЫЙ АЛГОРИТМ',
    'algorithm.scrollHint': 'Прокрутите до конца, чтобы активировать кнопку «Согласен».',
    'mandate.submit': 'Запросить стратегический брифинг',
    'mandate.submitting': 'Отправка…',
    'mandate.success': 'Мандат отправлен. Мы рассмотрим его в течение 48 рабочих часов.',
    'mandate.error': 'Не удалось отправить. Попробуйте ещё раз или свяжитесь с нами напрямую.',

    'footer.companyName': 'KPS Global Solutions',
    'footer.tagline': 'Структурируя суть глобальной торговли',
    'footer.registered': 'KPS Global Solutions — торговое название PT Kusuma Petak Sari, консалтинговой компании, зарегистрированной в Индонезии. Мы не предоставляем регулируемые финансовые, банковские услуги и денежные переводы и не храним средства клиентов. Мы действуем исключительно как координатор сделок и консультант, работая только с несанкционными товарами и проверенными контрагентами.',
    'footer.staff': 'Для сотрудников',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.rights': 'Все права защищены.',
    'footer.zeroNoise': 'Нулевой шум',
    'footer.noToxic': 'Без токсичных цепочек',
    'footer.reputation': 'Репутация важнее скорости',

    'history.badge': 'С 2017 года',
    'history.text': 'От BRIK до KPS — наш путь отточил главное. Kusuma Petak Sari — это дистиллированная идентичность: чистая структура, нулевой шум.',

    'notFound.title': 'Страница не найдена',
    'notFound.backHome': 'Вернуться на главную',

    // Privacy Policy
    'privacy.title': 'Политика конфиденциальности',
    'privacy.backHome': 'На главную',
    'privacy.lastUpdatedLabel': 'Последнее обновление',
    'privacy.lastUpdatedDate': '18 июля 2026 г.',
    'privacy.intro': `KPS Global Solutions — торговое название **PT Kusuma Petak Sari** («KPS», «мы»), консалтинговой компании, зарегистрированной в Республике Индонезия. Настоящая Политика описывает, как мы обрабатываем персональные данные, собираемые через этот сайт (kpsglobal.id), в соответствии с **Законом Республики Индонезия № 27 от 2022 года о защите персональных данных (UU PDP)** и общепризнанными принципами защиты данных.\n\nПолитика распространяется только на персональные данные, собираемые через этот сайт. Данные, обрабатываемые в рамках отдельных деловых или агентских договоров, регулируются этими договорами и их собственными условиями о защите данных.`,

    'privacy.s1.title': '1. Какие данные мы собираем',
    'privacy.s1.body': `При отправке формы мандата / запроса на стратегический брифинг мы собираем предоставленные вами сведения:\n\n- Название компании и юрисдикция\n- Ваша роль (конечный покупатель, мандат или посредник)\n- Интересующий товар\n- Инструмент финансовой готовности (POF / BCL / SBLC)\n- ФИО контактного лица\n- Контактный канал (WhatsApp, Telegram или телефон)\n\nМы также автоматически фиксируем ограниченные технические данные при отправке формы или принятии условий: приблизительную отметку времени, выбранный язык интерфейса, user-agent браузера, случайно сгенерированный идентификатор сессии и IP-адрес, видимый нашему провайдеру форм. Мы **не** собираем осознанно специальные категории данных (здоровье, религия, биометрия) и просим не указывать такие данные в свободных полях.`,

    'privacy.s2.title': '2. Цели обработки',
    'privacy.s2.body': `Мы обрабатываем ваши персональные данные, чтобы:\n\n- Рассмотреть и оценить ваш запрос на мандат или брифинг\n- Провести проверку контрагента (KYC) и комплаенс-скрининг\n- Подготовить и исполнить договоры и консультационные соглашения\n- Вести учёт, требуемый законодательством и правилами бухгалтерского учёта`,

    'privacy.s3.title': '3. Правовые основания',
    'privacy.s3.body': `Мы опираемся на ваше **согласие** (даётся при отметке чекбокса и отправке формы), на необходимость совершения **преддоговорных действий** по вашему запросу, а также на наш **законный интерес** в оценке и ведении деловых отношений — как это допускается UU PDP.`,

    'privacy.s4.title': '4. Передача и трансграничность',
    'privacy.s4.body': `Мы не продаём ваши персональные данные. Мы передаём их только поставщикам услуг, помогающим нам работать с этим сайтом и коммуникациями, а также профессиональным консультантам при необходимости.\n\nФорма мандата обрабатывается через сервис **Formspree** (работает из США) и через нашего email-провайдера. Это означает, что данные, отправленные через форму, передаются и хранятся на серверах за пределами Индонезии. Мы принимаем разумные меры, чтобы такие передачи сопровождались надлежащими гарантиями и уровнем защиты, соответствующим UU PDP.`,

    'privacy.s5.title': '5. Сроки хранения',
    'privacy.s5.body': `Мы храним персональные данные не дольше, чем необходимо для указанных целей: записи по обращениям и проверке контрагентов — до пяти (5) лет с даты последнего взаимодействия; данные, связанные с договорами, — на срок договора плюс применимый срок исковой давности. По истечении этих сроков данные удаляются или обезличиваются.`,

    'privacy.s6.title': '6. Права субъекта данных',
    'privacy.s6.body': `В соответствии с UU PDP вы вправе запросить доступ, исправление, обновление, удаление или ограничение обработки ваших персональных данных, отозвать согласие в любой момент и возражать против отдельных видов обработки. Для реализации любого из этих прав свяжитесь с нами по контактам из Раздела 9. Мы отвечаем в срок, установленный применимым законодательством.`,

    'privacy.s7.title': '7. Cookies и трекинг',
    'privacy.s7.body': `Этот сайт **не** использует рекламные или трекинговые cookie. Мы храним единственную функциональную настройку (выбранный язык) в локальном хранилище браузера, чтобы сайт запоминал ваш язык. Для такого строго функционального использования баннер согласия не требуется.`,

    'privacy.s8.title': '8. Защита данных',
    'privacy.s8.body': `Мы применяем технические и организационные меры, соразмерные рискам: шифрование при передаче (TLS), доступ по принципу необходимости и запрет на постоянное хранение персональных данных в email или мессенджерах. Ни один способ передачи через интернет не является полностью безопасным, но мы стремимся защищать ваши данные во всех случаях.`,

    'privacy.s9.title': '9. Контакты',
    'privacy.s9.body': `По любым вопросам о конфиденциальности или для реализации ваших прав обращайтесь:\n\n**PT Kusuma Petak Sari (KPS Global Solutions)**\nАдрес: Denpasar, Bali, Indonesia\nE-mail: mnc@kpsglobal.id`,

    'privacy.s10.title': '10. Изменения Политики',
    'privacy.s10.body': `Мы пересматриваем настоящую Политику не реже одного раза в год и при изменении наших операций обработки или применимого законодательства. Актуальная версия всегда доступна на этой странице; дата «Последнее обновление» указана выше.`,
  },

  zh: {
    'nav.philosophy': '理念',
    'nav.services': '服务',
    'nav.capabilities': '能力',
    'nav.algorithm': '流程',
    'nav.mandate': '提交委托',

    'hero.title': '构建全球贸易的本质',
    'hero.subtitle': '在资源、物流与合规交汇处的私人交易架构。',
    'hero.cta': '提交委托',
    'hero.since': '自2017年运营至今',

    'philosophy.sectionLabel': '三重含义',
    'philosophy.title': '名称哲学',
    'philosophy.subtitle': 'Kusuma Petak Sari 的每个词都承载着明确的含义，定义了我们的运营方式。',

    'philosophy.kusuma.title': 'Kusuma',
    'philosophy.kusuma.meaning': '花',
    'philosophy.kusuma.desc': '高贵的成长与诚信。如雏菊般对称、朴素而坚韧。我们相信有机的、有原则的扩展。',

    'philosophy.petak.title': 'Petak',
    'philosophy.petak.meaning': '桌面',
    'philosophy.petak.desc': '严格的结构、明确的区域、零市场噪音。每笔交易都被隔离、衡量和控制。',

    'philosophy.sari.title': 'Sari',
    'philosophy.sari.meaning': '本质',
    'philosophy.sari.desc': '只关注核心结果——成功交付。我们剥离干扰，专注于真正重要的事物。',

    'services.sectionLabel': '服务方向',
    'services.title': '战略采购与交易架构',
    'services.subtitle': '通过验证的供应链和机构级流程，提供对主要大宗商品市场的结构化准入。',

    'services.energy.title': '能源与燃料',
    'services.energy.desc': 'EN590 (10ppm) 柴油与 Jet A1 航空燃油。炼厂直供供应链，每一步均有验证文件。',
    'services.energy.details': 'EN590 (10ppm 柴油) 与 Jet A1 航空燃油。炼厂直供供应链，为机构客户提供结构化文档和交付协议。每个交易对手在合作前均通过制裁与 KYC 筛查。',

    'services.gas.title': '天然气 (LNG/LPG)',
    'services.gas.desc': '基于项目的LNG/LPG供应。面向机构买家的长期合同框架。',
    'services.gas.details': 'LNG和LPG采用双合同结构供应：FOB商品合同加独立物流合同。完全价格透明，面向机构买家的项目制供应量。',

    'services.metals.title': '战略金属',
    'services.metals.desc': '铝和硫磺合同供应。标准化交付协议，配备完整合规文件。',
    'services.metals.details': '非受制裁来源的铝和硫磺合同供应。标准化交付协议，配备完整合规文件。结算与产权转让通过持牌银行和独立托管代理进行。',

    'services.algorithm.title': 'KPS算法',
    'services.algorithm.step1': '筛选：实体验证、合规检查和背景评估。',
    'services.algorithm.step2': '结构：LOI、ICPO和财务准备验证（POF/BCL/SBLC）。',
    'services.algorithm.step3': '合规：反洗钱/反恐怖融资程序、制裁筛查、最终受益人身份验证、资金来源分析及管辖权核查。',
    'services.algorithm.step4': '授权：合同条款、支付机制和物流规划。',
    'services.algorithm.step5': '执行：签署TCIA、检验、产权转让和付款结算。',

    'capabilities.sectionLabel': '能力',
    'capabilities.title': '交易架构',
    'capabilities.subtitle': '超越经纪——我们架构整个交易生命周期。',

    'capabilities.paymaster.title': '交易生命周期协调',
    'capabilities.paymaster.desc': 'KPS 作为独立顾问协调整个交易生命周期：通过持牌银行和独立托管代理执行结算纪律、文件核验与金融流程合规。KPS 不持有客户资金。',

    'capabilities.investment.title': '投资模型',
    'capabilities.investment.desc': '国际贸易的财务分析和投资建模。具有风险调整收益的结构化交易框架。',

    'algorithm.sectionLabel': '流程',
    'algorithm.title': '算法',
    'algorithm.subtitle': '我们不可谈判的严格工作顺序。每笔交易无一例外地遵循此序列。',

    'algorithm.step1.title': '初步筛选',
    'algorithm.step1.desc': '实体验证、合规检查和背景评估。',

    'algorithm.step2.title': '文件审核',
    'algorithm.step2.desc': 'LOI、ICPO和财务准备验证（POF/BCL/SBLC）。',

    'algorithm.step3.title': '合规审查',
    'algorithm.step3.desc': '反洗钱/反恐怖融资程序、制裁筛查、最终受益人身份验证、资金来源分析及管辖权核查。',

    'algorithm.step4.title': '交易结构',
    'algorithm.step4.desc': '合同条款、支付机制和物流规划。',

    'algorithm.step5.title': '签署TCIA',
    'algorithm.step5.desc': '所有各方执行TCIA协议。',

    'algorithm.step6.title': '最终交付',
    'algorithm.step6.desc': '执行、检验、产权转移和付款结算。',

    'mandate.sectionLabel': '合作',
    'mandate.title': '提交委托',
    'mandate.subtitle': '开始合作流程。所有提交将在48个工作小时内审核。',

    'mandate.entity': '实体名称与管辖区',
    'mandate.entityPlaceholder': '例如 Acme Trading Ltd, 新加坡',
    'mandate.role': '角色',
    'mandate.rolePlaceholder': '选择您的角色',
    'mandate.roleEndBuyer': '最终买家',
    'mandate.roleMandate': '委托人',
    'mandate.roleIntermediary': '中间人',
    'mandate.commodity': '商品兴趣',
    'mandate.commodityPlaceholder': '选择商品',
    'mandate.commodityEN590': 'EN590 (10ppm)',
    'mandate.commodityJetA1': 'Jet A1',
    'mandate.commodityLNG': 'LNG',
    'mandate.commodityLPG': 'LPG',
    'mandate.commodityAluminum': '铝',
    'mandate.commoditySulphur': '硫磺',
    'mandate.financial': '财务准备',
    'mandate.financialPlaceholder': '选择工具',
    'mandate.financialPOF': '资金证明 (POF)',
    'mandate.financialBCL': '银行安慰函 (BCL)',
    'mandate.financialSBLC': '备用信用证 (SBLC)',
    'mandate.contactPerson': '联系人',
    'mandate.contactPersonPlaceholder': '全名',
    'mandate.contactChannel': 'WhatsApp / Telegram / 电话',
    'mandate.contactChannelPlaceholder': '例如 +62 000 000 0000',
    'mandate.agreePrefix': '我同意遵循',
    'mandate.agreeLink': 'KPS不可谈判的算法',
    'mandate.agreeSuffix': '。',
    'mandate.privacyConsentPrefix': '我同意根据',
    'mandate.privacyConsentLink': '隐私政策',
    'mandate.privacyConsentSuffix': '处理我的个人数据。',
    'mandate.acceptTerms': '同意',
    'mandate.downloadPdf': '下载 PDF 版本',
    'algorithm.termsFull': `KPS GLOBAL SOLUTIONS: 服务条款与交易算法

法律声明与约束性协议

通过点击"我同意"或继续请求服务，您（"客户"）确认并不可撤销地同意由 PT Kusuma Petak Sari（"顾问"）制定的以下"不可谈判算法"和"佣金保护"条款：

1. 严格的程序顺序：所有交易均遵循 KPS 算法：技术任务 (ICPO) → 签署 TCIA/咨询协议 → 有条件披露。在签署正式授权书和/或支付首笔咨询费之前，不得泄露任何敏感数据、供应商身份或 SPA 草案。

2. 不可撤销的费用保护：客户保证就顾问促成的合同项下的每批货物、展期或续约支付成功费（佣金）。

3. 禁止绕过条款：未经顾问事先书面同意，客户在任何情况下均不得与任何引荐方（供应商、炼油厂或授权代表）接触、谈判或达成交易。此保护在全球范围内有效期为两（2）年。

4. 制裁与出口管制：顾问仅参与非受制裁商品及非受制裁交易对手的交易。所有各方在合作前均须通过 KYC/AML 及制裁筛查（OFAC、EU、UN、UK）。顾问保留拒绝或终止任何存在制裁风险的合作的权利，且不承担任何责任。

5. 违约金：任何违反禁止绕过或支付条款的行为，将按已签署的 TCIA/咨询协议中约定的金额承担违约责任。

6. 管辖权：本条款受香港法律管辖。任何争议应通过香港国际商会 (ICC) 仲裁解决。`,
    'algorithm.termsTitle': 'KPS GLOBAL SOLUTIONS: 服务条款与交易算法',
    'algorithm.scrollHint': '滚动至底部以启用「同意」按钮。',
    'mandate.submit': '请求战略简报',
    'mandate.submitting': '发送中…',
    'mandate.success': '委托已提交。我们将在48个工作小时内审核。',
    'mandate.error': '发送失败。请重试或直接联系我们。',

    'footer.companyName': 'KPS Global Solutions',
    'footer.tagline': '构建全球贸易的本质',
    'footer.registered': 'KPS Global Solutions 是 PT Kusuma Petak Sari 的商业名称，该公司是一家在印度尼西亚注册的咨询公司。我们不提供受监管的金融、银行或汇款服务，也从不持有客户资金。我们仅作为交易协调方和顾问开展业务，只与非受制裁商品和经筛查的交易对手合作。',
    'footer.staff': '员工入口',
    'footer.privacy': '隐私政策',
    'footer.rights': '版权所有。',
    'footer.zeroNoise': '零噪音',
    'footer.noToxic': '无毒链',
    'footer.reputation': '声誉重于速度',

    'history.badge': '始于2017年',
    'history.text': '从BRIK到KPS，我们的旅程提炼了核心。Kusuma Petak Sari是蒸馏的身份——纯粹结构、零噪音。',

    'notFound.title': '页面未找到',
    'notFound.backHome': '返回首页',

    // Privacy Policy
    'privacy.title': '隐私政策',
    'privacy.backHome': '返回首页',
    'privacy.lastUpdatedLabel': '最后更新',
    'privacy.lastUpdatedDate': '2026年7月18日',
    'privacy.intro': `KPS Global Solutions 是 **PT Kusuma Petak Sari**（"KPS"、"我们"）的商业名称，该公司是一家在印度尼西亚共和国注册的咨询公司。本政策说明我们如何处理通过本网站（kpsglobal.id）收集的个人数据，依据 **印度尼西亚共和国 2022 年第 27 号个人数据保护法（UU PDP）** 及国际公认的数据保护原则。\n\n本政策仅涵盖我们通过本网站收集的个人数据。在单独的业务或代理协议下处理的数据，受这些协议及其各自的数据保护条款约束。`,

    'privacy.s1.title': '1. 我们收集的数据',
    'privacy.s1.body': `当您提交委托 / 战略简报表单时，我们收集您提供的信息：\n\n- 实体名称与管辖区\n- 您的角色（最终买家、委托人或中间人）\n- 感兴趣的商品\n- 财务准备工具（POF / BCL / SBLC）\n- 联系人全名\n- 联系方式（WhatsApp、Telegram 或电话）\n\n当您提交表单或接受条款时，我们还会自动记录有限的技术数据：大致时间戳、所选界面语言、浏览器 user-agent、随机生成的会话标识符，以及我们表单服务商可见的 IP 地址。我们**不会**有意收集特殊类别数据（健康、宗教、生物识别），并请您不要在自由文本字段中填写此类数据。`,

    'privacy.s2.title': '2. 处理目的',
    'privacy.s2.body': `我们处理您的个人数据用于：\n\n- 回复并评估您的委托或简报请求\n- 开展交易对手尽职调查（KYC）与合规筛查\n- 准备并履行合同及咨询业务\n- 保存法律和会计所需的记录`,

    'privacy.s3.title': '3. 法律依据',
    'privacy.s3.body': `我们依据您的**同意**（在您勾选同意框并提交表单时给出）、依据您请求下签订合同前采取**必要步骤**的需要，以及我们评估和开展业务的**合法利益**——均在 UU PDP 允许的范围内。`,

    'privacy.s4.title': '4. 共享与跨境传输',
    'privacy.s4.body': `我们不出售您的个人数据。我们仅与协助我们运营本网站和通讯的服务提供商，以及必要时的专业顾问共享数据。\n\n我们的委托表单通过 **Formspree**（一家在美国运营的表单处理服务）及我们的电子邮件服务商传递。这意味着通过表单提交的数据会被传输并存储在印度尼西亚境外的服务器上。我们采取合理措施，确保此类传输受到适当保障，其保护水平与 UU PDP 一致。`,

    'privacy.s5.title': '5. 数据保留',
    'privacy.s5.body': `我们仅在实现上述目的所必需的期间内保留个人数据：咨询和尽职调查记录自我们最后一次互动起最多保留五（5）年；与合同相关的数据保留至合同期限加适用的时效期。之后，数据将被删除或匿名化。`,

    'privacy.s6.title': '6. 您的权利',
    'privacy.s6.body': `根据 UU PDP，您可以请求访问、更正、更新、删除或限制处理您的个人数据，随时撤回同意，并反对某些处理。要行使上述任何权利，请通过第 9 节中的联系方式与我们联系。我们将在适用法律要求的期限内答复。`,

    'privacy.s7.title': '7. Cookies 与跟踪',
    'privacy.s7.body': `本网站**不**使用广告或跟踪 Cookie。我们仅在您浏览器的本地存储中保存一项功能性偏好（您选择的语言），以便网站记住您的语言。此类严格功能性用途无需同意横幅。`,

    'privacy.s8.title': '8. 数据安全',
    'privacy.s8.body': `我们采取与风险相称的技术和组织措施，包括传输加密（TLS）、按需知密的访问原则，以及禁止将个人数据长期存储在电子邮件或即时通讯工具中。互联网上没有任何传输方式是完全安全的，但我们始终致力于保护您的数据。`,

    'privacy.s9.title': '9. 联系我们',
    'privacy.s9.body': `如有任何隐私问题或需行使您的权利，请联系：\n\n**PT Kusuma Petak Sari (KPS Global Solutions)**\n地址：Denpasar, Bali, Indonesia\n电子邮件：mnc@kpsglobal.id`,

    'privacy.s10.title': '10. 本政策的变更',
    'privacy.s10.body': `我们至少每年审查一次本政策，并在我们的处理操作或适用法律发生变化时进行审查。最新版本始终可在本页面查看，上方显示"最后更新"日期。`,
  },
};
