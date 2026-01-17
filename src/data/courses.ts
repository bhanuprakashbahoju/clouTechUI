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
        image: "/images/SnowFlake.jpeg",
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
        image: "/images/GenAI.jpeg",
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
        description: "Master the full data engineering lifecycle using Snowflake, AWS, Python, and dbt to build scalable data warehouses.",
        image: "/images/SnowFlake.jpeg",
        gradient: "from-blue-500 via-blue-700 to-indigo-900",
        certifications: [
            "SnowPro Core Certification Prep",
            "dbt Fundamentals Certification",
            "Course Completion Certificate"
        ],
        prerequisites: [
            "Basic computer literacy",
            "Analytical mindset",
            "No prior coding required (covered in course) "
        ],
        outcomes: [
            "Build robust SQL-based transformation layers with dbt ",
            "Automate data ingestion from AWS S3 to Snowflake ",
            "Develop Python-based Snowflake connectors and programmatic loading ",
            "Implement Advanced Data Modeling (SCD Type 1 & 2) "
        ],
        syllabus: [
            {
                week: 1,
                title: "SQL Foundations for Data Engineers",
                topics: [
                    "Introduction to keys, cardinality, and tables ",
                    "SQL syntax: SELECT, FROM, WHERE, JOINs ",
                    "Aggregate functions and GROUP BY ",
                    "Subqueries and Common Table Expressions (CTEs) "
                ]
            },
            {
                week: 2,
                title: "Advanced SQL & Window Functions",
                topics: [
                    "RANK, ROW_NUMBER, LAG, and LEAD ",
                    "Advanced filtering and logic",
                    "Data manipulation and cleaning",
                    "Performance-oriented query writing"
                ]
            },
            {
                week: 3,
                title: "AWS Fundamentals for Data Engineering",
                topics: [
                    "AWS account setup, Regions, and AZs ",
                    "S3 (Simple Storage Service) Deep Dive ",
                    "IAM (Identity and Access Management) ",
                    "Introduction to Glue and Lambda "
                ]
            },
            {
                week: 4,
                title: "Snowflake Architecture & Fundamentals",
                topics: [
                    "Storage, Compute, and Services layers ",
                    "Databases, Schemas, Warehouses, and Roles ",
                    "COPY INTO from local/S3 and Stage creation ",
                    "Querying semi-structured JSON data "
                ]
            },
            {
                week: 5,
                title: "Data Modeling & Query Optimization",
                topics: [
                    "OLTP vs OLAP, Star & Snowflake schemas ",
                    "Fact and Dimension tables ",
                    "SCD Type 1 & 2 concepts ",
                    "Query profiling and warehouse scaling "
                ]
            },
            {
                week: 6,
                title: "Snowflake Advanced Features & Automation",
                topics: [
                    "Time Travel, Fail-safe, and Zero-copy Cloning ",
                    "Streams and Tasks for CDC ",
                    "Stored Procedures and UDFs ",
                    "Automating daily loads with Resource Monitors "
                ]
            },
            {
                week: 7,
                title: "Python for Data Engineering - Basics",
                topics: [
                    "Python installation and VSCode integration ",
                    "Control structures: Loops and Conditionals ",
                    "Data structures: Lists, Dicts, Tuples, Sets ",
                    "File Handling (CSV, JSON) and Lambda functions "
                ]
            },
            {
                week: 8,
                title: "Python Integration with Snowflake",
                topics: [
                    "Connecting to Snowflake via Python ",
                    "Loading datasets programmatically ",
                    "Error and Exception handling ",
                    "Fundamentals of OOP for Data Pipelines "
                ]
            },
            {
                week: 9,
                title: "dbt Fundamentals",
                topics: [
                    "dbt Core installation and configuration ",
                    "Project structure: models, seeds, snapshots ",
                    "Writing SQL models and using ref() ",
                    "Connecting dbt to Snowflake environment "
                ]
            },
            {
                week: 10,
                title: "Advanced dbt: Testing & Documentation",
                topics: [
                    "dbt tests: Unique, Not Null, Relationships ",
                    "Implementing Snapshots for SCDs ",
                    "Generating dbt documentation ",
                    "Jinja templating in SQL models "
                ]
            },
            {
                week: 11,
                title: "Performance & Cost Optimization",
                topics: [
                    "Micro-partitioning and Clustering ",
                    "Storage cost optimization ",
                    "Result cache and performance impact analysis ",
                    "Comparing query efficiency with clustering "
                ]
            },
            {
                week: 12,
                title: "Data Governance & Compliance",
                topics: [
                    "Role-based Access Control (RBAC) ",
                    "Row Access and Masking Policies ",
                    "Time Travel and Fail-safe governance ",
                    "Resource monitors and cost controls "
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
        description: "Master Microsoft's all-in-one analytics solution covering OneLake, Spark, Data Factory, and Real-time Streaming.",
        image: "/images/Fabric.jpeg",
        gradient: "from-blue-400 via-indigo-500 to-purple-600",
        certifications: [
            "Microsoft Fabric Analytics Engineer Associate",
            "Fabric Project Completion Certificate"
        ],
        prerequisites: [
            "Basic SQL knowledge",
            "Understanding of data warehousing concepts",
            "Power BI basics preferred "
        ],
        outcomes: [
            "Architect end-to-end Lakehouse and Data Warehouse solutions ",
            "Process massive datasets using Apache Spark and PySpark ",
            "Implement Data Ingestion with Data Pipelines and Dataflows ",
            "Develop real-time streaming analytics and Power BI semantic models "
        ],
        syllabus: [
            {
                week: 1,
                title: "Fabric Core Architecture & Setup",
                topics: [
                    "Microsoft Fabric Overview and Setup ",
                    "OneLake and Shortcuts concepts ",
                    "Lakehouse vs Data Warehouse in Fabric ",
                    "Workspace management and RBAC roles "
                ]
            },
            {
                week: 2,
                title: "Data Processing with Apache Spark",
                topics: [
                    "PySpark: Reading CSV and writing Delta Lake ",
                    "Managed vs External tables ",
                    "Transformations in Spark Notebooks ",
                    "Vacuum and Optimization strategies "
                ]
            },
            {
                week: 3,
                title: "Data Integration & Orchestration",
                topics: [
                    "Data Pipelines: Copy Activity ",
                    "Copying data from Lakehouse to ADLS Gen2 ",
                    "Scheduling Notebooks and parameterized execution ",
                    "Dataflows in Data Factory "
                ]
            },
            {
                week: 4,
                title: "End-to-End Project: Data Engineering",
                topics: [
                    "Project Architecture: Bronze, Silver, Gold layers ",
                    "Rest API data ingestion ",
                    "Star Schema Data Modeling ",
                    "Creating Semantic Models for Power BI "
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
        description: "Intensive training on Azure Data Factory, Databricks, PySpark, and Synapse Analytics with CI/CD integration.",
        image: "/images/Azure Data Engineering.jpeg",
        gradient: "from-blue-600 via-sky-700 to-indigo-800",
        certifications: [
            "Microsoft Certified: Azure Data Engineer Associate (DP-203)",
            "Azure Fundamentals (AZ-900)"
        ],
        prerequisites: [
            "Basic SQL knowledge ",
            "Understanding of programming logic",
            "Account setup requirements (Credit card or student account) "
        ],
        outcomes: [
            "Design complex ETL/ELT pipelines in Azure Data Factory ",
            "Implement Big Data processing with PySpark on Databricks ",
            "Automate deployments using Azure DevOps (CI/CD) ",
            "Build medallion architecture (Bronze/Silver/Gold) projects "
        ],
        syllabus: [
            {
                week: 1,
                title: "Azure Foundations & Storage",
                topics: [
                    "On-Prem vs Cloud (IaaS, PaaS, SaaS) ",
                    "Resource Groups, VNETs, and Key Vaults ",
                    "Storage Accounts: LRS, GRS, ZRS ",
                    "Azure SQL Database deployment "
                ]
            },
            {
                week: 2,
                title: "Azure Data Factory (ADF) Mastery",
                topics: [
                    "Integration Runtimes (Azure vs Self-hosted) ",
                    "Linked Services, Datasets, and Activities ",
                    "Control flow: Lookup, Filter, ForEach, If ",
                    "Event-based and Scheduled Triggers "
                ]
            },
            {
                week: 3,
                title: "Databricks & Big Data Architecture",
                topics: [
                    "Databricks Workspace and Cluster management ",
                    "Spark Architecture: Driver vs Executors ",
                    "Unity Catalog and DBFS ",
                    "Reading/Writing: Parquet, Delta, JSON "
                ]
            },
            {
                week: 4,
                title: "PySpark & Transformations",
                topics: [
                    "Narrow and Wide transformations ",
                    "DataFrame actions and Schema validation ",
                    "Window Functions: Rank, Lead, Lag ",
                    "Delta Live Tables and SCD Type 1/2 "
                ]
            },
            {
                week: 5,
                title: "Azure DevOps & CI/CD",
                topics: [
                    "GIT commands and Branching strategies ",
                    "Setting up Azure Repos in ADF/Databricks ",
                    "Build and Release pipelines ",
                    "Automating code movement between environments "
                ]
            },
            {
                week: 6,
                title: "Capstone Projects & Career Prep",
                topics: [
                    "Project: On-Prem SQL to Azure SQL via ADF ",
                    "Project: End-to-End API/SQL to Power BI pipeline ",
                    "Mock Interviews and Resume preparation ",
                    "LinkedIn and Naukri profile setup "
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
        description: "Master the AWS Data Stack including S3, Glue, Athena, Redshift, and Lambda to build automated pipelines.",
        image: "/images/AWS.jpeg",
        gradient: "from-orange-500 via-orange-600 to-red-700",
        certifications: [
            "AWS Certified Data Engineer – Associate",
            "AWS Cloud Practitioner",
            "Course Completion Certificate"
        ],
        prerequisites: [
            "Basic understanding of SQL",
            "Familiarity with cloud concepts",
            "Python core fundamentals "
        ],
        outcomes: [
            "Architect S3-based Data Lakes with Raw/Staged/Curated zones ",
            "Automate ETL jobs using AWS Glue and Job Bookmarks ",
            "Implement Serverless transformations with Lambda triggers ",
            "Analyze big data with Athena and Redshift Spectrum "
        ],
        syllabus: [
            {
                week: 1,
                title: "Data Engineering Foundations",
                topics: [
                    "DE vs Data Science vs Analytics ",
                    "OLTP vs OLAP & Batch vs Streaming ",
                    "ETL vs ELT & Data Lake vs Warehouse ",
                    "Star & Snowflake Schemas "
                ]
            },
            {
                week: 2,
                title: "SQL & Python Foundations",
                topics: [
                    "Window functions: Rank, Dense_Rank, Lead, Lag ",
                    "SCD Type 1 & 2 in SQL ",
                    "Pandas fundamentals for data processing ",
                    "Handling large datasets with chunking "
                ]
            },
            {
                week: 3,
                title: "AWS Identity & Storage",
                topics: [
                    "IAM: Users, Groups, Roles, and Policies ",
                    "S3 Storage classes and Partitioning ",
                    "S3 Performance optimization ",
                    "Solving the 'Small Files' problem "
                ]
            },
            {
                week: 4,
                title: "AWS Compute: EC2 & Lambda",
                topics: [
                    "EC2 Life Cycle and Security Groups ",
                    "Lambda execution model and cold starts ",
                    "S3-triggered Lambda functions ",
                    "Lambda integration with Glue and DynamoDB "
                ]
            },
            {
                week: 5,
                title: "AWS Glue & Serverless ETL",
                topics: [
                    "Glue Data Catalog, Crawlers, and Jobs ",
                    "Glue vs EMR comparison ",
                    "Implementing Job Bookmarks for state ",
                    "Cost optimization for Glue jobs "
                ]
            },
            {
                week: 6,
                title: "Big Data with PySpark",
                topics: [
                    "Spark Lazy Evaluation and Actions ",
                    "Transformations: withColumn, Filter, GroupBy ",
                    "Performance: Broadcast Joins and Partitioning ",
                    "Handling data skew and caching "
                ]
            },
            {
                week: 7,
                title: "Query Layer: Athena & Redshift",
                topics: [
                    "Athena Architecture and CTAS queries ",
                    "Redshift Distribution styles and Sort keys ",
                    "Redshift Spectrum for querying S3 ",
                    "Redshift VACUUM and WLM "
                ]
            },
            {
                week: 8,
                title: "Orchestration & Automation",
                topics: [
                    "AWS Step Functions for complex workflows ",
                    "EventBridge for pipeline scheduling ",
                    "Error handling and retry patterns ",
                    "Building event-driven pipelines "
                ]
            },
            {
                week: 9,
                title: "Capstone: Event-Driven Pipeline",
                topics: [
                    "Designing S3 -> Lambda -> Glue -> Redshift ",
                    "Client-side upload routing ",
                    "Transformation and schema validation ",
                    "Curated zone finalization for Athena query "
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