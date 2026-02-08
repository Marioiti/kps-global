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
    'philosophy.subtitle': 'Every word in PT Kusuma Petak Sari carries a deliberate meaning that defines how we operate.',

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
    'services.title': 'Commodity Desk',
    'services.subtitle': 'Structured access to primary commodity markets through verified supply chains and institutional-grade procedures.',

    'services.energy.title': 'Energy & Fuel',
    'services.energy.desc': 'EN590 (10ppm), Jet A1, D6, ESPO, Urals. Direct access to 9 verified suppliers across 25 operational procedures.',
    'services.energy.details': 'EN590 (10ppm diesel), Jet A1, D6 fuel oil, and crude oil (ESPO, Urals). Direct access to 9 verified suppliers and 25 operational procedures. Structured documentation and delivery protocols for institutional clients.',

    'services.gas.title': 'Gas (LNG/LPG)',
    'services.gas.desc': 'LNG/LPG project-based supply with structured 30% discount models. Long-term contractual frameworks for institutional buyers.',
    'services.gas.details': 'LNG and LPG supply under dual-contract structure: FOB commodity contract plus separate Logistics contract. 100% price transparency. Project-based supply with structured 30% discount models for institutional buyers.',

    'services.metals.title': 'Strategic Metals',
    'services.metals.desc': 'Aluminum (A7) and Sulphur contractual supply. Standardized delivery protocols with full compliance documentation.',
    'services.metals.details': 'Aluminum A7 and Sulphur contractual supply. Paymaster security for the entire transaction chain. Standardized delivery protocols with full compliance documentation. Escrow and title transfer under institutional-grade procedures.',

    'services.algorithm.title': 'The KPS Algorithm',
    'services.algorithm.step1': 'Screening: Entity verification, compliance check, and background assessment.',
    'services.algorithm.step2': 'Structure: LOI, ICPO, and financial readiness verification (POF/BCL/SBLC).',
    'services.algorithm.step3': 'Compliance: KYC/AML procedures, sanctions screening, and jurisdiction analysis.',
    'services.algorithm.step4': 'Mandate: Contract terms, payment mechanisms, and logistics planning.',
    'services.algorithm.step5': 'Execution: JVTA signing, inspection, title transfer, and payment settlement.',

    // Capabilities
    'capabilities.sectionLabel': 'Capabilities',
    'capabilities.title': 'Transaction Architecture',
    'capabilities.subtitle': 'Beyond brokerage—we architect the entire transaction lifecycle.',

    'capabilities.paymaster.title': 'Paymaster Services',
    'capabilities.paymaster.desc': 'KPS acts as the secure Paymaster for the entire transaction chain. Escrow management, fund verification, and compliant disbursement.',

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
    'algorithm.step3.desc': 'KYC/AML procedures, sanctions screening, and jurisdiction analysis.',

    'algorithm.step4.title': 'Deal Structuring',
    'algorithm.step4.desc': 'Contract terms, payment mechanisms, and logistics planning.',

    'algorithm.step5.title': 'JVTA Signing',
    'algorithm.step5.desc': 'Joint Venture Transaction Agreement execution between all parties.',

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
    'mandate.commodityD6': 'D6',
    'mandate.commodityESPO': 'ESPO',
    'mandate.commodityUrals': 'Urals',
    'mandate.commodityLNG': 'LNG',
    'mandate.commodityLPG': 'LPG',
    'mandate.commodityAluminum': 'Aluminum (A7)',
    'mandate.commoditySulphur': 'Sulphur',
    'mandate.financial': 'Financial Logistics Readiness',
    'mandate.financialPlaceholder': 'Select instrument',
    'mandate.financialPOF': 'Proof of Funds (POF)',
    'mandate.financialBCL': 'Bank Comfort Letter (BCL)',
    'mandate.financialSBLC': 'Standby Letter of Credit (SBLC)',
    'mandate.contactPerson': 'Contact Person',
    'mandate.contactPersonPlaceholder': 'Full name',
    'mandate.contactChannel': 'WhatsApp / Telegram / Phone',
    'mandate.contactChannelPlaceholder': 'e.g. +7 914 557 4000',
    'mandate.agreePrefix': 'I agree to follow the ',
    'mandate.agreeLink': 'KPS non-negotiable algorithm',
    'mandate.agreeSuffix': '.',
    'mandate.acceptTerms': 'I Agree',
    'mandate.downloadPdf': 'Download PDF Version',
    'algorithm.termsFull': `KPS GLOBAL SOLUTIONS: TERMS OF SERVICE & TRANSACTION ALGORITHM

LEGAL NOTICE & BINDING AGREEMENT

By clicking "I Agree" or proceeding to request services, you (the "Client") acknowledge and irrevocably agree to the following Non-Negotiable Algorithm and Fee Protection terms established by PT Kusuma Petak Sari (the "Consultant"):

1. Strict Procedural Sequence: All transactions follow the KPS Algorithm: Technical Assignment (ICPO) → TCIA/Consulting Agreement Execution → Conditional Disclosure. No sensitive data, supplier identities, or draft SPAs shall be released prior to the execution of a formal mandate and/or payment of the initial consulting fee.

2. Irrevocable Fee Protection: The Client guarantees the payment of the Success Fee (Commission) for every shipment, rollover, or extension of the contract facilitated by the Consultant.

3. Non-Circumvention: The Client shall not, under any circumstances, contact, negotiate, or conclude transactions with any Introduced Party (Suppliers, Refineries, or Mandates) without the prior written consent of the Consultant. This protection remains in force for two (2) years globally.

4. Liquidated Damages: Any breach of the non-circumvention or payment clauses shall trigger an immediate penalty of USD 100,000 plus 100% of the total projected commissions.

5. Jurisdiction: These terms are governed by the laws of Hong Kong. Any disputes shall be resolved via ICC Arbitration in Hong Kong.`,
    'algorithm.termsTitle': 'KPS GLOBAL SOLUTIONS: TERMS OF SERVICE & TRANSACTION ALGORITHM',
    'algorithm.scrollHint': 'Scroll to the end to enable the Accept button.',
    'mandate.submit': 'Request a Strategic Briefing',
    'mandate.submitting': 'Sending…',
    'mandate.success': 'Mandate submitted. We will review within 48 business hours.',
    'mandate.error': 'Failed to send. Please try again or contact us directly.',

    // Footer
    'footer.companyName': 'KPS Global Solutions',
    'footer.tagline': 'Structuring the Essence of Global Trade',
    'footer.registered': 'PT Kusuma Petak Sari. Registered in Indonesia.',
    'footer.rights': 'All rights reserved.',
    'footer.zeroNoise': 'Zero Noise',
    'footer.noToxic': 'No Toxic Chains',
    'footer.reputation': 'Reputation over Speed',

    // History
    'history.badge': 'Since 2017',
    'history.text': 'From BRIK to ARION, our journey refined what matters. PT Kusuma Petak Sari is the distilled identity—pure structure, zero noise.',

    // NotFound
    'notFound.title': 'Oops! Page not found',
    'notFound.backHome': 'Return to Home',
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
    'philosophy.subtitle': 'Каждое слово в PT Kusuma Petak Sari несёт осознанный смысл, определяющий наш подход.',

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
    'services.title': 'Товарный деск',
    'services.subtitle': 'Структурированный доступ к первичным товарным рынкам через верифицированные цепочки поставок.',

    'services.energy.title': 'Энергоносители',
    'services.energy.desc': 'EN590 (10ppm), Jet A1, D6, ESPO, Urals. Прямой доступ к 9 верифицированным поставщикам через 25 операционных процедур.',
    'services.energy.details': 'EN590 (10ppm дизель), Jet A1, D6 мазут, сырая нефть (ESPO, Urals). Прямой доступ к 9 верифицированным поставщикам и 25 операционным процедурам. Структурированная документация и протоколы поставки для институциональных клиентов.',

    'services.gas.title': 'Газ (СПГ/СУГ)',
    'services.gas.desc': 'Проектные поставки СПГ/СУГ с моделями скидки 30%. Долгосрочные контрактные рамки для институциональных покупателей.',
    'services.gas.details': 'Поставки СПГ и СУГ по двухконтрактной структуре: контракт FOB на товар плюс отдельный контракт на логистику. 100% ценовая прозрачность. Проектные поставки со структурированными моделями скидки 30% для институциональных покупателей.',

    'services.metals.title': 'Стратегические металлы',
    'services.metals.desc': 'Контрактные поставки алюминия (А7) и серы. Стандартизированные протоколы поставки с полной комплаенс-документацией.',
    'services.metals.details': 'Контрактные поставки алюминия А7 и серы. Защита пеймастера для всей транзакционной цепочки. Стандартизированные протоколы поставки с полной комплаенс-документацией. Эскроу и передача титула по процедурам институционального уровня.',

    'services.algorithm.title': 'Алгоритм KPS',
    'services.algorithm.step1': 'Скрининг: Верификация компании, проверка комплаенса и оценка репутации.',
    'services.algorithm.step2': 'Структура: LOI, ICPO и верификация финансовой готовности (POF/BCL/SBLC).',
    'services.algorithm.step3': 'Комплаенс: Процедуры KYC/AML, скрининг санкций и юрисдикционный анализ.',
    'services.algorithm.step4': 'Мандат: Условия контракта, платёжные механизмы и логистическое планирование.',
    'services.algorithm.step5': 'Исполнение: Подписание JVTA, инспекция, передача титула и расчёт.',

    'capabilities.sectionLabel': 'Возможности',
    'capabilities.title': 'Архитектура сделок',
    'capabilities.subtitle': 'Больше чем брокеридж — мы проектируем весь жизненный цикл транзакции.',

    'capabilities.paymaster.title': 'Услуги пеймастера',
    'capabilities.paymaster.desc': 'KPS выступает защищённым пеймастером всей транзакционной цепочки. Эскроу, верификация средств и комплаентное распределение.',

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
    'algorithm.step3.desc': 'Процедуры KYC/AML, скрининг санкций и юрисдикционный анализ.',

    'algorithm.step4.title': 'Структурирование сделки',
    'algorithm.step4.desc': 'Условия контракта, платёжные механизмы и логистическое планирование.',

    'algorithm.step5.title': 'Подписание JVTA',
    'algorithm.step5.desc': 'Исполнение совместного транзакционного соглашения между всеми сторонами.',

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
    'mandate.commodityD6': 'D6',
    'mandate.commodityESPO': 'ESPO',
    'mandate.commodityUrals': 'Urals',
    'mandate.commodityLNG': 'СПГ',
    'mandate.commodityLPG': 'СУГ',
    'mandate.commodityAluminum': 'Алюминий (А7)',
    'mandate.commoditySulphur': 'Сера',
    'mandate.financial': 'Финансовая готовность',
    'mandate.financialPlaceholder': 'Выберите инструмент',
    'mandate.financialPOF': 'Подтверждение средств (POF)',
    'mandate.financialBCL': 'Банковское письмо (BCL)',
    'mandate.financialSBLC': 'Резервный аккредитив (SBLC)',
    'mandate.contactPerson': 'Контактное лицо',
    'mandate.contactPersonPlaceholder': 'ФИО',
    'mandate.contactChannel': 'WhatsApp / Telegram / Телефон',
    'mandate.contactChannelPlaceholder': 'напр. +7 914 557 4000',
    'mandate.agreePrefix': 'Я согласен следовать ',
    'mandate.agreeLink': 'безусловному алгоритму KPS',
    'mandate.agreeSuffix': '.',
    'mandate.acceptTerms': 'Согласен',
    'mandate.downloadPdf': 'Скачать PDF-версию',
    'algorithm.termsFull': `KPS GLOBAL SOLUTIONS: УСЛОВИЯ ИСПОЛЬЗОВАНИЯ И ТРАНЗАКЦИОННЫЙ АЛГОРИТМ

ЮРИДИЧЕСКОЕ УВЕДОМЛЕНИЕ И ОБЯЗАТЕЛЬНОЕ СОГЛАШЕНИЕ

Нажимая «Согласен» или переходя к запросу услуг, вы («Клиент») подтверждаете и безотзывно соглашаетесь со следующим «Алгоритмом работы» и условиями «Защиты гонорара», установленными PT Kusuma Petak Sari («Консультант»):

1. Строгая последовательность процедур: Все сделки следуют Алгоритму KPS: Техническое задание (ICPO) → Подписание TCIA/Консалтингового соглашения → Условное раскрытие информации. Никакие конфиденциальные данные, личности поставщиков или проекты SPA не подлежат раскрытию до подписания формального мандата и/или оплаты первичного консультационного сбора.

2. Безотзывная защита гонорара: Клиент гарантирует выплату Гонорара за успех (Комиссии) за каждую отгрузку, пролонгацию или продление контракта, организованного при содействии Консультанта.

3. Запрет на обход (Non-Circumvention): Клиент обязуется ни при каких обстоятельствах не вступать в контакт, не вести переговоры и не заключать сделки с любой Представленной стороной (Поставщиками, НПЗ или мандатами) без предварительного письменного согласия Консультанта. Данная защита действует в течение двух (2) лет по всему миру.

4. Штрафные санкции: Любое нарушение пунктов об обходе или невыплате влечет за собой немедленный штраф в размере 100 000 долларов США плюс 100% от общей суммы прогнозируемой комиссии.

5. Юрисдикция: Настоящие условия регулируются законодательством Гонконга. Любые споры подлежат разрешению через арбитраж ICC в Гонконге.`,
    'algorithm.termsTitle': 'KPS GLOBAL SOLUTIONS: УСЛОВИЯ ИСПОЛЬЗОВАНИЯ И ТРАНЗАКЦИОННЫЙ АЛГОРИТМ',
    'algorithm.scrollHint': 'Прокрутите до конца, чтобы активировать кнопку «Согласен».',
    'mandate.submit': 'Запросить стратегический брифинг',
    'mandate.submitting': 'Отправка…',
    'mandate.success': 'Мандат отправлен. Мы рассмотрим его в течение 48 рабочих часов.',
    'mandate.error': 'Не удалось отправить. Попробуйте ещё раз или свяжитесь с нами напрямую.',

    'footer.companyName': 'KPS Global Solutions',
    'footer.tagline': 'Структурируя суть глобальной торговли',
    'footer.registered': 'PT Kusuma Petak Sari. Зарегистрирована в Индонезии.',
    'footer.rights': 'Все права защищены.',
    'footer.zeroNoise': 'Нулевой шум',
    'footer.noToxic': 'Без токсичных цепочек',
    'footer.reputation': 'Репутация важнее скорости',

    'history.badge': 'С 2017 года',
    'history.text': 'От BRIK до ARION — наш путь отточил главное. PT Kusuma Petak Sari — это дистиллированная идентичность: чистая структура, нулевой шум.',

    'notFound.title': 'Страница не найдена',
    'notFound.backHome': 'Вернуться на главную',
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
    'philosophy.subtitle': 'PT Kusuma Petak Sari 的每个词都承载着明确的含义，定义了我们的运营方式。',

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
    'services.title': '商品交易台',
    'services.subtitle': '通过验证的供应链和机构级流程，提供对主要大宗商品市场的结构化准入。',

    'services.energy.title': '能源与燃料',
    'services.energy.desc': 'EN590 (10ppm)、Jet A1、D6、ESPO、乌拉尔。直接接触9家验证供应商，跨越25个操作流程。',
    'services.energy.details': 'EN590 (10ppm柴油)、Jet A1、D6燃料油和原油(ESPO、乌拉尔)。直接接触9家验证供应商和25个操作流程。为机构客户提供结构化文档和交付协议。',

    'services.gas.title': '天然气 (LNG/LPG)',
    'services.gas.desc': '基于项目的LNG/LPG供应，结构化30%折扣模型。面向机构买家的长期合同框架。',
    'services.gas.details': 'LNG和LPG采用双合同结构供应：FOB商品合同加独立物流合同。100%价格透明度。基于项目的供应，面向机构买家采用结构化30%折扣模型。',

    'services.metals.title': '战略金属',
    'services.metals.desc': '铝（A7）和硫磺合同供应。标准化交付协议，配备完整合规文件。',
    'services.metals.details': '铝A7和硫磺合同供应。整个交易链的付款代理保护。标准化交付协议，配备完整合规文件。按机构级程序进行托管和产权转让。',

    'services.algorithm.title': 'KPS算法',
    'services.algorithm.step1': '筛选：实体验证、合规检查和背景评估。',
    'services.algorithm.step2': '结构：LOI、ICPO和财务准备验证（POF/BCL/SBLC）。',
    'services.algorithm.step3': '合规：KYC/AML程序、制裁筛查和管辖权分析。',
    'services.algorithm.step4': '授权：合同条款、支付机制和物流规划。',
    'services.algorithm.step5': '执行：签署JVTA、检验、产权转让和付款结算。',

    'capabilities.sectionLabel': '能力',
    'capabilities.title': '交易架构',
    'capabilities.subtitle': '超越经纪——我们架构整个交易生命周期。',

    'capabilities.paymaster.title': '付款代理服务',
    'capabilities.paymaster.desc': 'KPS作为整个交易链的安全付款代理。托管管理、资金验证和合规拨付。',

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
    'algorithm.step3.desc': 'KYC/AML程序、制裁筛查和管辖权分析。',

    'algorithm.step4.title': '交易结构',
    'algorithm.step4.desc': '合同条款、支付机制和物流规划。',

    'algorithm.step5.title': '签署JVTA',
    'algorithm.step5.desc': '各方之间执行联合交易协议。',

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
    'mandate.commodityD6': 'D6',
    'mandate.commodityESPO': 'ESPO',
    'mandate.commodityUrals': '乌拉尔',
    'mandate.commodityLNG': 'LNG',
    'mandate.commodityLPG': 'LPG',
    'mandate.commodityAluminum': '铝 (A7)',
    'mandate.commoditySulphur': '硫磺',
    'mandate.financial': '财务准备',
    'mandate.financialPlaceholder': '选择工具',
    'mandate.financialPOF': '资金证明 (POF)',
    'mandate.financialBCL': '银行安慰函 (BCL)',
    'mandate.financialSBLC': '备用信用证 (SBLC)',
    'mandate.contactPerson': '联系人',
    'mandate.contactPersonPlaceholder': '全名',
    'mandate.contactChannel': 'WhatsApp / Telegram / 电话',
    'mandate.contactChannelPlaceholder': '例如 +7 914 557 4000',
    'mandate.agreePrefix': '我同意遵循',
    'mandate.agreeLink': 'KPS不可谈判的算法',
    'mandate.agreeSuffix': '。',
    'mandate.acceptTerms': '同意',
    'mandate.downloadPdf': '下载 PDF 版本',
    'algorithm.termsFull': `KPS GLOBAL SOLUTIONS: 服务条款与交易算法

法律声明与约束性协议

通过点击"我同意"或继续请求服务，您（"客户"）确认并不可撤销地同意由 PT Kusuma Petak Sari（"顾问"）制定的以下"不可谈判算法"和"佣金保护"条款：

1. 严格的程序顺序：所有交易均遵循 KPS 算法：技术任务 (ICPO) → 签署 TCIA/咨询协议 → 有条件披露。在签署正式授权书和/或支付首笔咨询费之前，不得泄露任何敏感数据、供应商身份或 SPA 草案。

2. 不可撤销的费用保护：客户保证就顾问促成的合同项下的每批货物、展期或续约支付成功费（佣金）。

3. 禁止绕过条款：未经顾问事先书面同意，客户在任何情况下均不得与任何引荐方（供应商、炼油厂或授权代表）接触、谈判或达成交易。此保护在全球范围内有效期为两（2）年。

4. 违约金：任何违反禁止绕过或支付条款的行为将导致立即处以 100,000 美元 的罚款，外加预计总佣金的 100%。

5. 管辖权：本条款受香港法律管辖。任何争议应通过香港国际商会 (ICC) 仲裁解决。`,
    'algorithm.termsTitle': 'KPS GLOBAL SOLUTIONS: 服务条款与交易算法',
    'algorithm.scrollHint': '滚动至底部以启用「同意」按钮。',
    'mandate.submit': '请求战略简报',
    'mandate.submitting': '发送中…',
    'mandate.success': '委托已提交。我们将在48个工作小时内审核。',
    'mandate.error': '发送失败。请重试或直接联系我们。',

    'footer.companyName': 'KPS Global Solutions',
    'footer.tagline': '构建全球贸易的本质',
    'footer.registered': 'PT Kusuma Petak Sari。注册于印度尼西亚。',
    'footer.rights': '版权所有。',
    'footer.zeroNoise': '零噪音',
    'footer.noToxic': '无毒链',
    'footer.reputation': '声誉重于速度',

    'history.badge': '始于2017年',
    'history.text': '从BRIK到ARION，我们的旅程提炼了核心。PT Kusuma Petak Sari是蒸馏的身份——纯粹结构、零噪音。',

    'notFound.title': '页面未找到',
    'notFound.backHome': '返回首页',
  },
};
