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

    'services.gas.title': 'Gas',
    'services.gas.desc': 'LNG/LPG project-based supply with structured 30% discount models. Long-term contractual frameworks for institutional buyers.',

    'services.metals.title': 'Metals',
    'services.metals.desc': 'Aluminum (A7) and Sulphur contractual supply. Standardized delivery protocols with full compliance documentation.',

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
    'mandate.agree': 'I agree to follow the KPS non-negotiable algorithm.',
    'mandate.submit': 'Request a Strategic Briefing',
    'mandate.success': 'Mandate submitted. We will review within 48 business hours.',

    // Footer
    'footer.tagline': 'Structuring the Essence of Global Trade',
    'footer.registered': 'PT Kusuma Petak Sari. Registered in Indonesia.',
    'footer.rights': 'All rights reserved.',
    'footer.zeroNoise': 'Zero Noise',
    'footer.noToxic': 'No Toxic Chains',
    'footer.reputation': 'Reputation over Speed',

    // History
    'history.badge': 'Since 2017',
    'history.text': 'From BRIK to ARION, our journey refined what matters. PT Kusuma Petak Sari is the distilled identity—pure structure, zero noise.',
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

    'services.gas.title': 'Газ',
    'services.gas.desc': 'Проектные поставки СПГ/СУГ с моделями скидки 30%. Долгосрочные контрактные рамки для институциональных покупателей.',

    'services.metals.title': 'Металлы',
    'services.metals.desc': 'Контрактные поставки алюминия (А7) и серы. Стандартизированные протоколы поставки с полной комплаенс-документацией.',

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
    'mandate.agree': 'Я согласен следовать безусловному алгоритму KPS.',
    'mandate.submit': 'Запросить стратегический брифинг',
    'mandate.success': 'Мандат отправлен. Мы рассмотрим его в течение 48 рабочих часов.',

    'footer.tagline': 'Структурируя суть глобальной торговли',
    'footer.registered': 'PT Kusuma Petak Sari. Зарегистрирована в Индонезии.',
    'footer.rights': 'Все права защищены.',
    'footer.zeroNoise': 'Нулевой шум',
    'footer.noToxic': 'Без токсичных цепочек',
    'footer.reputation': 'Репутация важнее скорости',

    'history.badge': 'С 2017 года',
    'history.text': 'От BRIK до ARION — наш путь отточил главное. PT Kusuma Petak Sari — это дистиллированная идентичность: чистая структура, нулевой шум.',
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

    'services.gas.title': '天然气',
    'services.gas.desc': '基于项目的LNG/LPG供应，结构化30%折扣模型。面向机构买家的长期合同框架。',

    'services.metals.title': '金属',
    'services.metals.desc': '铝（A7）和硫磺合同供应。标准化交付协议，配备完整合规文件。',

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
    'mandate.agree': '我同意遵循KPS不可谈判的算法。',
    'mandate.submit': '请求战略简报',
    'mandate.success': '委托已提交。我们将在48个工作小时内审核。',

    'footer.tagline': '构建全球贸易的本质',
    'footer.registered': 'PT Kusuma Petak Sari。注册于印度尼西亚。',
    'footer.rights': '版权所有。',
    'footer.zeroNoise': '零噪音',
    'footer.noToxic': '无毒链',
    'footer.reputation': '声誉重于速度',

    'history.badge': '始于2017年',
    'history.text': '从BRIK到ARION，我们的旅程提炼了核心。PT Kusuma Petak Sari是蒸馏的身份——纯粹结构、零噪音。',
  },
};
