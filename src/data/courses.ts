// Course data template with syllabus information
// Edit this file to add/modify course data - changes will reflect in the carousel

export interface CourseModule {
    week: number;
    title: string;
    topics: string[];
}

export interface CourseData {
    id: string;
    name: string;
    tagline: string;
    duration: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    description: string;
    image: string;
    gradient: string;
    certifications: string[];
    syllabus: CourseModule[];
    prerequisites: string[];
    outcomes: string[];
}

export const COURSES: CourseData[] = [
    {
        id: "sql-snowflake-dbt-mastery",
        name: "SQL, Snowflake and DBT Training",
        tagline: "End-to-End Data Engineering with AWS Integration",
        duration: "9 Weeks", // Calculated from SQL (3w), Snowflake (4.5w), and DBT (1.5w) 
        level: "Intermediate",
        description: "A comprehensive program covering SQL fundamentals, Snowflake cloud warehousing architecture, and DBT transformation workflows including real-time projects.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        gradient: "from-teal-600 via-blue-700 to-cyan-800",
        certifications: [
            "SnowPro Core Preparation",
            "DBT Certification Ready",
            "Course Completion Certificate"
        ],
        prerequisites: [
            "Basic understanding of data concepts",
            "Interest in Cloud Computing (AWS/Azure/GCP)",
            "No advanced programming required"
        ],
        outcomes: [
            "Master complex SQL queries and analytical functions",
            "Design Snowflake Real-Time Project Architecture",
            "Implement automated ELT pipelines using DBT",
            "Handle Data Governance and Performance Tuning",
            "End-to-end Medallion Architecture implementation"
        ],
        syllabus: [
            {
                week: 1,
                title: "SQL Fundamentals & Commands",
                topics: [
                    "DDL, DML, TCL, and DCL Commands",
                    "Filtering and Sorting (Where, Order By, Distinct)",
                    "Operators and Aliasing",
                    "String and Number Functions"
                ]
            },
            {
                week: 2,
                title: "Advanced SQL Queries",
                topics: [
                    "Joins (Inner, Left, Right, Full, Cross, Self)",
                    "Set Operators (Union, Union All, Minus, Intersect)",
                    "Aggregate and Analytical Functions (Min, Max, Avg, Sum, Count)",
                    "Window Functions (Rank, Dense_Rank, Row_Number, Lead, Lag)"
                ]
            },
            {
                week: 3,
                title: "SQL Optimization & Constraints",
                topics: [
                    "Constraints (Primary, Foreign, Unique, Not Null, Default)",
                    "Common Table Expressions (CTE) & Subqueries",
                    "Views, Sequences, and CTAS",
                    "Interview Scenarios & Daily Tasks"
                ]
            },
            {
                week: 4,
                title: "Snowflake Architecture & Objects",
                topics: [
                    "Snowflake Real-Time Project Architecture",
                    "Storage Layer vs MetaData Layer",
                    "Table Types (Permanent, Transient, Temporary)",
                    "Zero-Copy Cloning and Time Travel"
                ]
            },
            {
                week: 5,
                title: "Data Loading & Cloud Integration",
                topics: [
                    "AWS S3 Integration",
                    "Stages (Internal & External)",
                    "Snowpipe for Continuous Loading",
                    "Bulk Loading with COPY command"
                ]
            },
            {
                week: 6,
                title: "Snowflake Advanced Features",
                topics: [
                    "Streams and Tasks (CDC)",
                    "UDFs (Scalar, Tabular, Secure)",
                    "Views (Materialized, Secure, Normal)",
                    "Semi-Structured Data handling (JSON, Parquet)"
                ]
            },
            {
                week: 7,
                title: "Governance & Performance Tuning",
                topics: [
                    "Data Masking & Security",
                    "Cache Types & Storage Optimization",
                    "Cost Optimization & Resource Monitors",
                    "Medallion Architecture (Bronze/Silver/Gold)"
                ]
            },
            {
                week: 8,
                title: "DBT Fundamentals & Modeling",
                topics: [
                    "DBT Architecture & Cloud/Core Setup",
                    "Models & Materializations (View, Table, Incremental)",
                    "Seeds (CSV/PSV) and Sources",
                    "Ref Function & Project YAML configuration"
                ]
            },
            {
                week: 9,
                title: "DBT Advanced Workflows & Deployment",
                topics: [
                    "Macros, Jinja, and Packages",
                    "Testing (Singular, Generic, Custom)",
                    "Snapshots (SCD Type 0, 1, 2)",
                    "CI/CD with GitHub & Data Lineage"
                ]
            }
        ]
    },
    {
        id: "gen-ai-engineer",
        name: "Gen AI Engineer",
        tagline: "Master LLMs, RAG, and Agentic AI Workflows",
        duration: "8 Weeks",
        level: "Advanced",
        description: "Comprehensive training from Generative AI foundations to building complex multi-agent systems and deploying LLM applications with observability.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
        gradient: "from-indigo-900 via-purple-900 to-black",
        certifications: [
            "GenAI Engineering Specialist",
            "RAG Architecture Certificate",
            "Agentic AI Developer Certification"
        ],
        prerequisites: [
            "Strong Python programming skills",
            "Basic understanding of Machine Learning",
            "Familiarity with API integrations"
        ],
        outcomes: [
            "Build and orchestrate advanced RAG pipelines using LangChain and Pinecone",
            "Develop autonomous AI agents and multi-agent workflows with CrewAI",
            "Implement LLM observability and evaluation using LangSmith and LangWatch",
            "Deploy scalable LLM applications with FastAPI and Cloud Guardrails"
        ],
        syllabus: [
            {
                week: 1,
                title: "GenAI Foundations & Prompt Engineering",
                topics: [
                    "Evolution from AI/ML/DL to Generative AI",
                    "Core components: LLMs, Embeddings, Vector DBs, RAG, Agents",
                    "Zero-shot, Few-shot, and Chain-of-Thought techniques",
                    "Text Embeddings and Semantic Similarity (Cosine vs Euclidean)"
                ]
            },
            {
                week: 2,
                title: "Vector Databases & Introduction to RAG",
                topics: [
                    "FAISS, Pinecone, Chroma, and Weaviate",
                    "Indexing strategies and Vector CRUD operations",
                    "Retrieval-Augmented Generation (RAG) components",
                    "Challenges in RAG: Hallucination, relevance, and latency"
                ]
            },
            {
                week: 3,
                title: "Building RAG Pipelines",
                topics: [
                    "Orchestrating pipelines with LangChain",
                    "Document loaders, chunking, and embedding integration",
                    "RAG Workflow with LangFlow",
                    "Using Bedrock with Titan and Claude models"
                ]
            },
            {
                week: 4,
                title: "RAG on Cloud & Agentic AI Basics",
                topics: [
                    "Setting up and securing RAG workflows in Bedrock",
                    "Introduction to Agentic AI: Tools, Memory, Planning",
                    "LangChain agent executor and agent types",
                    "Connecting LLMs to external tools (API, Search)"
                ]
            },
            {
                week: 5,
                title: "Agentic AI Workflows",
                topics: [
                    "Modular RAG workflows using Agno framework",
                    "Multi-Agent Workflows with CrewAI",
                    "Assigning roles, tasks, and collaborative memory",
                    "Simulating agent-based research and review"
                ]
            },
            {
                week: 6,
                title: "Observability & Evaluation",
                topics: [
                    "Logging and tracing with LangChain + LangSmith",
                    "Evaluating hallucinations and grounding",
                    "LangWatch for live monitoring and prompt scoring",
                    "Integrating continuous improvement loops"
                ]
            },
            {
                week: 7,
                title: "Deployment & Protocols",
                topics: [
                    "Deploying LLMs as APIs using FastAPI",
                    "Implementing Guardrails for LLM Safety (Protect AI)",
                    "Model Context Protocol (MCP) architecture",
                    "Agent-to-Agent (A2A) communication standards"
                ]
            },
            {
                week: 8,
                title: "Capstone Project & ChatGPT Agent Kit",
                topics: [
                    "OpenAI’s Agent Kit framework and architecture",
                    "n8n automations for AI agents",
                    "Building a complete end-to-end Agentic AI project",
                    "Final evaluation and output quality review"
                ]
            }
        ]
    },

    {
        id: "snowflake-data-engineering",
        name: "Snowflake Data Engineering",
        tagline: "End-to-End Data Pipelines with AWS and dbt",
        duration: "12 Weeks",
        level: "Intermediate",
        description: "Master the full data engineering lifecycle using Snowflake, AWS, Python, and dbt to build scalable data warehouses[cite: 403].",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
        gradient: "from-blue-500 via-blue-700 to-indigo-900",
        certifications: [
            "SnowPro Core Certification Prep",
            "dbt Fundamentals Certification",
            "Course Completion Certificate"
        ],
        prerequisites: [
            "Basic computer literacy",
            "Analytical mindset",
            "No prior coding required (covered in course) [cite: 435]"
        ],
        outcomes: [
            "Build robust SQL-based transformation layers with dbt [cite: 464]",
            "Automate data ingestion from AWS S3 to Snowflake [cite: 418]",
            "Develop Python-based Snowflake connectors and programmatic loading [cite: 461]",
            "Implement Advanced Data Modeling (SCD Type 1 & 2) [cite: 424, 475]"
        ],
        syllabus: [
            {
                week: 1,
                title: "SQL Foundations for Data Engineers",
                topics: [
                    "Introduction to keys, cardinality, and tables [cite: 407]",
                    "SQL syntax: SELECT, FROM, WHERE, JOINs [cite: 407]",
                    "Aggregate functions and GROUP BY [cite: 407]",
                    "Subqueries and Common Table Expressions (CTEs) [cite: 407]"
                ]
            },
            {
                week: 2,
                title: "Advanced SQL & Window Functions",
                topics: [
                    "RANK, ROW_NUMBER, LAG, and LEAD [cite: 407]",
                    "Advanced filtering and logic",
                    "Data manipulation and cleaning",
                    "Performance-oriented query writing"
                ]
            },
            {
                week: 3,
                title: "AWS Fundamentals for Data Engineering",
                topics: [
                    "AWS account setup, Regions, and AZs [cite: 410, 411]",
                    "S3 (Simple Storage Service) Deep Dive [cite: 412]",
                    "IAM (Identity and Access Management) [cite: 413]",
                    "Introduction to Glue and Lambda [cite: 415, 416]"
                ]
            },
            {
                week: 4,
                title: "Snowflake Architecture & Fundamentals",
                topics: [
                    "Storage, Compute, and Services layers [cite: 418]",
                    "Databases, Schemas, Warehouses, and Roles [cite: 418]",
                    "COPY INTO from local/S3 and Stage creation [cite: 418]",
                    "Querying semi-structured JSON data [cite: 418]"
                ]
            },
            {
                week: 5,
                title: "Data Modeling & Query Optimization",
                topics: [
                    "OLTP vs OLAP, Star & Snowflake schemas [cite: 422]",
                    "Fact and Dimension tables [cite: 423]",
                    "SCD Type 1 & 2 concepts [cite: 424]",
                    "Query profiling and warehouse scaling [cite: 426]"
                ]
            },
            {
                week: 6,
                title: "Snowflake Advanced Features & Automation",
                topics: [
                    "Time Travel, Fail-safe, and Zero-copy Cloning [cite: 430]",
                    "Streams and Tasks for CDC [cite: 431]",
                    "Stored Procedures and UDFs [cite: 429]",
                    "Automating daily loads with Resource Monitors [cite: 433, 434]"
                ]
            },
            {
                week: 7,
                title: "Python for Data Engineering - Basics",
                topics: [
                    "Python installation and VSCode integration [cite: 437]",
                    "Control structures: Loops and Conditionals [cite: 442]",
                    "Data structures: Lists, Dicts, Tuples, Sets [cite: 443]",
                    "File Handling (CSV, JSON) and Lambda functions [cite: 452, 454]"
                ]
            },
            {
                week: 8,
                title: "Python Integration with Snowflake",
                topics: [
                    "Connecting to Snowflake via Python [cite: 461]",
                    "Loading datasets programmatically [cite: 462]",
                    "Error and Exception handling [cite: 455]",
                    "Fundamentals of OOP for Data Pipelines [cite: 458]"
                ]
            },
            {
                week: 9,
                title: "dbt Fundamentals",
                topics: [
                    "dbt Core installation and configuration [cite: 467]",
                    "Project structure: models, seeds, snapshots [cite: 468]",
                    "Writing SQL models and using ref() [cite: 469, 470]",
                    "Connecting dbt to Snowflake environment [cite: 471]"
                ]
            },
            {
                week: 10,
                title: "Advanced dbt: Testing & Documentation",
                topics: [
                    "dbt tests: Unique, Not Null, Relationships [cite: 474]",
                    "Implementing Snapshots for SCDs [cite: 475]",
                    "Generating dbt documentation [cite: 476]",
                    "Jinja templating in SQL models [cite: 477]"
                ]
            },
            {
                week: 11,
                title: "Performance & Cost Optimization",
                topics: [
                    "Micro-partitioning and Clustering [cite: 482, 483]",
                    "Storage cost optimization [cite: 484]",
                    "Result cache and performance impact analysis [cite: 481, 486]",
                    "Comparing query efficiency with clustering [cite: 485]"
                ]
            },
            {
                week: 12,
                title: "Data Governance & Compliance",
                topics: [
                    "Role-based Access Control (RBAC) [cite: 490]",
                    "Row Access and Masking Policies [cite: 491]",
                    "Time Travel and Fail-safe governance [cite: 492]",
                    "Resource monitors and cost controls [cite: 493]"
                ]
            }
        ]
    },


    {
        id: "microsoft-fabric",
        name: "Microsoft Fabric",
        tagline: "Unified Analytics in the Era of AI",
        duration: "4-6 Weeks",
        level: "Intermediate",
        description: "Master Microsoft's all-in-one analytics solution covering OneLake, Spark, Data Factory, and Real-time Streaming[cite: 503, 542].",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&h=800&fit=crop",
        gradient: "from-blue-400 via-indigo-500 to-purple-600",
        certifications: [
            "Microsoft Fabric Analytics Engineer Associate",
            "Fabric Project Completion Certificate"
        ],
        prerequisites: [
            "Basic SQL knowledge",
            "Understanding of data warehousing concepts",
            "Power BI basics preferred [cite: 520]"
        ],
        outcomes: [
            "Architect end-to-end Lakehouse and Data Warehouse solutions [cite: 516, 521]",
            "Process massive datasets using Apache Spark and PySpark [cite: 522, 525]",
            "Implement Data Ingestion with Data Pipelines and Dataflows [cite: 536, 541]",
            "Develop real-time streaming analytics and Power BI semantic models [cite: 542, 556]"
        ],
        syllabus: [
            {
                week: 1,
                title: "Fabric Core Architecture & Setup",
                topics: [
                    "Microsoft Fabric Overview and Setup [cite: 510, 511]",
                    "OneLake and Shortcuts concepts [cite: 517, 518]",
                    "Lakehouse vs Data Warehouse in Fabric [cite: 516, 521]",
                    "Workspace management and RBAC roles [cite: 513, 514]"
                ]
            },
            {
                week: 2,
                title: "Data Processing with Apache Spark",
                topics: [
                    "PySpark: Reading CSV and writing Delta Lake [cite: 525]",
                    "Managed vs External tables [cite: 427]",
                    "Transformations in Spark Notebooks [cite: 528]",
                    "Vacuum and Optimization strategies [cite: 534]"
                ]
            },
            {
                week: 3,
                title: "Data Integration & Orchestration",
                topics: [
                    "Data Pipelines: Copy Activity [cite: 536, 537]",
                    "Copying data from Lakehouse to ADLS Gen2 [cite: 538]",
                    "Scheduling Notebooks and parameterized execution [cite: 535, 539]",
                    "Dataflows in Data Factory [cite: 541]"
                ]
            },
            {
                week: 4,
                title: "End-to-End Project: Data Engineering",
                topics: [
                    "Project Architecture: Bronze, Silver, Gold layers [cite: 544, 546]",
                    "Rest API data ingestion [cite: 546]",
                    "Star Schema Data Modeling [cite: 549]",
                    "Creating Semantic Models for Power BI [cite: 556]"
                ]
            }
        ]
    },



    {
        id: "azure-data-engineer-pro",
        name: "Azure Data Engineer",
        tagline: "Build Enterprise Cloud Data Solutions",
        duration: "45 Days",
        level: "Advanced",
        description: "Intensive training on Azure Data Factory, Databricks, PySpark, and Synapse Analytics with CI/CD integration[cite: 570, 621, 686].",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=800&fit=crop",
        gradient: "from-blue-600 via-sky-700 to-indigo-800",
        certifications: [
            "Microsoft Certified: Azure Data Engineer Associate (DP-203)",
            "Azure Fundamentals (AZ-900)"
        ],
        prerequisites: [
            "Basic SQL knowledge [cite: 705]",
            "Understanding of programming logic",
            "Account setup requirements (Credit card or student account) [cite: 561]"
        ],
        outcomes: [
            "Design complex ETL/ELT pipelines in Azure Data Factory [cite: 570, 578]",
            "Implement Big Data processing with PySpark on Databricks [cite: 621, 634]",
            "Automate deployments using Azure DevOps (CI/CD) [cite: 686, 692]",
            "Build medallion architecture (Bronze/Silver/Gold) projects [cite: 713, 715]"
        ],
        syllabus: [
            {
                week: 1,
                title: "Azure Foundations & Storage",
                topics: [
                    "On-Prem vs Cloud (IaaS, PaaS, SaaS) [cite: 559, 564]",
                    "Resource Groups, VNETs, and Key Vaults [cite: 566, 567, 569]",
                    "Storage Accounts: LRS, GRS, ZRS [cite: 568]",
                    "Azure SQL Database deployment [cite: 600]"
                ]
            },
            {
                week: 2,
                title: "Azure Data Factory (ADF) Mastery",
                topics: [
                    "Integration Runtimes (Azure vs Self-hosted) [cite: 573, 574]",
                    "Linked Services, Datasets, and Activities [cite: 576, 577, 579]",
                    "Control flow: Lookup, Filter, ForEach, If [cite: 580, 582, 583, 584]",
                    "Event-based and Scheduled Triggers [cite: 606, 607]"
                ]
            },
            {
                week: 3,
                title: "Databricks & Big Data Architecture",
                topics: [
                    "Databricks Workspace and Cluster management [cite: 623, 624]",
                    "Spark Architecture: Driver vs Executors [cite: 638]",
                    "Unity Catalog and DBFS [cite: 629, 633]",
                    "Reading/Writing: Parquet, Delta, JSON [cite: 631]"
                ]
            },
            {
                week: 4,
                title: "PySpark & Transformations",
                topics: [
                    "Narrow and Wide transformations [cite: 641]",
                    "DataFrame actions and Schema validation [cite: 651, 652]",
                    "Window Functions: Rank, Lead, Lag [cite: 674, 680]",
                    "Delta Live Tables and SCD Type 1/2 [cite: 683, 684]"
                ]
            },
            {
                week: 5,
                title: "Azure DevOps & CI/CD",
                topics: [
                    "GIT commands and Branching strategies [cite: 616, 617]",
                    "Setting up Azure Repos in ADF/Databricks [cite: 615, 687]",
                    "Build and Release pipelines [cite: 618, 619]",
                    "Automating code movement between environments [cite: 620]"
                ]
            },
            {
                week: 6,
                title: "Capstone Projects & Career Prep",
                topics: [
                    "Project: On-Prem SQL to Azure SQL via ADF [cite: 713]",
                    "Project: End-to-End API/SQL to Power BI pipeline [cite: 715]",
                    "Mock Interviews and Resume preparation [cite: 724]",
                    "LinkedIn and Naukri profile setup [cite: 725]"
                ]
            }
        ]
    },


    {
        id: "aws-data-engineer-mastery",
        name: "AWS Data Engineering",
        tagline: "Build Scalable Cloud Data Lakes",
        duration: "10 Weeks",
        level: "Intermediate",
        description: "Master the AWS Data Stack including S3, Glue, Athena, Redshift, and Lambda to build automated pipelines[cite: 762, 800, 857, 892].",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
        gradient: "from-orange-500 via-orange-600 to-red-700",
        certifications: [
            "AWS Certified Data Engineer – Associate",
            "AWS Cloud Practitioner",
            "Course Completion Certificate"
        ],
        prerequisites: [
            "Basic understanding of SQL",
            "Familiarity with cloud concepts",
            "Python core fundamentals [cite: 752]"
        ],
        outcomes: [
            "Architect S3-based Data Lakes with Raw/Staged/Curated zones [cite: 774, 904]",
            "Automate ETL jobs using AWS Glue and Job Bookmarks [cite: 805, 809]",
            "Implement Serverless transformations with Lambda triggers [cite: 818, 832]",
            "Analyze big data with Athena and Redshift Spectrum [cite: 858, 877]"
        ],
        syllabus: [
            {
                week: 1,
                title: "Data Engineering Foundations",
                topics: [
                    "DE vs Data Science vs Analytics [cite: 730]",
                    "OLTP vs OLAP & Batch vs Streaming [cite: 731, 732]",
                    "ETL vs ELT & Data Lake vs Warehouse [cite: 733, 734]",
                    "Star & Snowflake Schemas [cite: 735]"
                ]
            },
            {
                week: 2,
                title: "SQL & Python Foundations",
                topics: [
                    "Window functions: Rank, Dense_Rank, Lead, Lag [cite: 745, 746]",
                    "SCD Type 1 & 2 in SQL [cite: 748]",
                    "Pandas fundamentals for data processing [cite: 758]",
                    "Handling large datasets with chunking [cite: 759, 760]"
                ]
            },
            {
                week: 3,
                title: "AWS Identity & Storage",
                topics: [
                    "IAM: Users, Groups, Roles, and Policies [cite: 780, 785]",
                    "S3 Storage classes and Partitioning [cite: 769, 770]",
                    "S3 Performance optimization [cite: 772]",
                    "Solving the 'Small Files' problem [cite: 771]"
                ]
            },
            {
                week: 4,
                title: "AWS Compute: EC2 & Lambda",
                topics: [
                    "EC2 Life Cycle and Security Groups [cite: 794, 796]",
                    "Lambda execution model and cold starts [cite: 822, 823]",
                    "S3-triggered Lambda functions [cite: 832]",
                    "Lambda integration with Glue and DynamoDB [cite: 827, 828]"
                ]
            },
            {
                week: 5,
                title: "AWS Glue & Serverless ETL",
                topics: [
                    "Glue Data Catalog, Crawlers, and Jobs [cite: 802, 803, 805]",
                    "Glue vs EMR comparison [cite: 806]",
                    "Implementing Job Bookmarks for state [cite: 809]",
                    "Cost optimization for Glue jobs [cite: 811]"
                ]
            },
            {
                week: 6,
                title: "Big Data with PySpark",
                topics: [
                    "Spark Lazy Evaluation and Actions [cite: 843, 844]",
                    "Transformations: withColumn, Filter, GroupBy [cite: 848]",
                    "Performance: Broadcast Joins and Partitioning [cite: 853, 854]",
                    "Handling data skew and caching [cite: 855, 856]"
                ]
            },
            {
                week: 7,
                title: "Query Layer: Athena & Redshift",
                topics: [
                    "Athena Architecture and CTAS queries [cite: 864, 865]",
                    "Redshift Distribution styles and Sort keys [cite: 875, 876]",
                    "Redshift Spectrum for querying S3 [cite: 877]",
                    "Redshift VACUUM and WLM [cite: 879, 880]"
                ]
            },
            {
                week: 8,
                title: "Orchestration & Automation",
                topics: [
                    "AWS Step Functions for complex workflows [cite: 885]",
                    "EventBridge for pipeline scheduling [cite: 888]",
                    "Error handling and retry patterns [cite: 894]",
                    "Building event-driven pipelines [cite: 886]"
                ]
            },
            {
                week: 9,
                title: "Capstone: Event-Driven Pipeline",
                topics: [
                    "Designing S3 -> Lambda -> Glue -> Redshift [cite: 893]",
                    "Client-side upload routing [cite: 898]",
                    "Transformation and schema validation [cite: 902]",
                    "Curated zone finalization for Athena query [cite: 904, 906]"
                ]
            }
        ]
    }

];

// Helper function to get course by ID
export const getCourseById = (id: string): CourseData | undefined => {
    return COURSES.find(course => course.id === id);
};

// Get all course IDs
export const getCourseIds = (): string[] => {
    return COURSES.map(course => course.id);
};