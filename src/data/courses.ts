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
    },

    {
        id: "full-stack-development",
        name: "Full Stack Development",
        tagline: "Build Modern Web Applications End-to-End",
        duration: "12 Weeks",
        level: "Beginner",
        description: "Master front-end and back-end web development with React, Node.js, databases, and deployment — from zero to building production-ready applications.",
        image: "/images/FullStack.jpeg",
        gradient: "from-emerald-500 via-teal-600 to-cyan-700",
        certifications: [
            "Full Stack Developer Certificate",
            "React Developer Certification",
            "Node.js Application Developer",
            "Course Completion Certificate"
        ],
        prerequisites: [
            "Basic computer literacy",
            "No prior coding experience required",
            "Passion for building web applications"
        ],
        outcomes: [
            "Build responsive, modern UIs with React and Tailwind CSS",
            "Develop RESTful APIs and GraphQL backends with Node.js & Express",
            "Design and manage databases using MongoDB and PostgreSQL",
            "Deploy full-stack applications to cloud platforms (AWS/Vercel/Render)"
        ],
        syllabus: [
            {
                week: 1,
                title: "Web Fundamentals & HTML/CSS",
                topics: [
                    "How the Web Works: HTTP, DNS, and Client-Server Model",
                    "HTML5 Semantic Elements and Accessibility",
                    "CSS3 Flexbox, Grid, and Responsive Design",
                    "Introduction to Developer Tools and VS Code"
                ]
            },
            {
                week: 2,
                title: "JavaScript Essentials",
                topics: [
                    "Variables, Data Types, and Operators",
                    "Functions, Scope, and Closures",
                    "DOM Manipulation and Event Handling",
                    "ES6+ Features: Arrow Functions, Destructuring, Spread/Rest"
                ]
            },
            {
                week: 3,
                title: "Advanced JavaScript & Async Programming",
                topics: [
                    "Promises, Async/Await, and Fetch API",
                    "Error Handling and Debugging Techniques",
                    "Modules, Classes, and Prototype Chain",
                    "Working with Local Storage and Session Storage"
                ]
            },
            {
                week: 4,
                title: "React Fundamentals",
                topics: [
                    "JSX, Components, and Props",
                    "State Management with useState and useReducer",
                    "useEffect and Component Lifecycle",
                    "Conditional Rendering and Lists"
                ]
            },
            {
                week: 5,
                title: "Advanced React & Routing",
                topics: [
                    "React Router for Single-Page Applications",
                    "Context API and Global State Management",
                    "Custom Hooks and Reusable Logic",
                    "Form Handling and Validation Libraries"
                ]
            },
            {
                week: 6,
                title: "Styling & UI Frameworks",
                topics: [
                    "Tailwind CSS Utility-First Approach",
                    "Component Libraries: shadcn/ui, Material UI",
                    "Animations with Framer Motion",
                    "Responsive Design and Mobile-First Strategy"
                ]
            },
            {
                week: 7,
                title: "Node.js & Express Backend",
                topics: [
                    "Node.js Runtime and Event Loop",
                    "Express.js Routing and Middleware",
                    "Building RESTful APIs (CRUD Operations)",
                    "Authentication with JWT and bcrypt"
                ]
            },
            {
                week: 8,
                title: "Databases: MongoDB & PostgreSQL",
                topics: [
                    "MongoDB: Documents, Collections, and Mongoose ORM",
                    "PostgreSQL: Tables, Relations, and Prisma ORM",
                    "Schema Design and Data Modeling",
                    "Database Indexing and Query Optimization"
                ]
            },
            {
                week: 9,
                title: "API Design & Integration",
                topics: [
                    "REST vs GraphQL: When to Use What",
                    "GraphQL with Apollo Server and Client",
                    "Third-Party API Integration (Stripe, SendGrid, OAuth)",
                    "API Rate Limiting, Caching, and Security"
                ]
            },
            {
                week: 10,
                title: "Testing & Quality Assurance",
                topics: [
                    "Unit Testing with Jest and React Testing Library",
                    "Integration and E2E Testing with Cypress",
                    "API Testing with Postman and Supertest",
                    "Code Quality: ESLint, Prettier, and Husky"
                ]
            },
            {
                week: 11,
                title: "DevOps & Deployment",
                topics: [
                    "Git Workflows: Branching, Merging, and PRs",
                    "CI/CD Pipelines with GitHub Actions",
                    "Docker Containerization for Full Stack Apps",
                    "Deploying to Vercel, Render, and AWS"
                ]
            },
            {
                week: 12,
                title: "Capstone Project & Career Prep",
                topics: [
                    "Building a Complete Full Stack Application",
                    "Performance Optimization and Lighthouse Audits",
                    "Portfolio Building and GitHub Profile Setup",
                    "Mock Interviews and Resume Preparation"
                ]
            }
        ]
    },

    {
        id: "devops-engineering",
        name: "DevOps Engineering",
        tagline: "Automate, Deploy, and Scale with Confidence",
        duration: "10 Weeks",
        level: "Intermediate",
        description: "Learn the DevOps lifecycle from CI/CD pipelines and containerization to infrastructure as code and cloud-native monitoring at scale.",
        image: "/images/DevOps.jpeg",
        gradient: "from-orange-500 via-red-600 to-rose-700",
        certifications: [
            "AWS Certified DevOps Engineer Prep",
            "Docker Certified Associate Prep",
            "Kubernetes Administrator (CKA) Prep",
            "Course Completion Certificate"
        ],
        prerequisites: [
            "Basic Linux command line knowledge",
            "Familiarity with at least one programming language",
            "Understanding of networking basics"
        ],
        outcomes: [
            "Build end-to-end CI/CD pipelines with Jenkins, GitHub Actions, and ArgoCD",
            "Containerize and orchestrate microservices with Docker and Kubernetes",
            "Provision and manage cloud infrastructure using Terraform and Ansible",
            "Implement monitoring, logging, and alerting with Prometheus, Grafana, and ELK"
        ],
        syllabus: [
            {
                week: 1,
                title: "DevOps Foundations & Linux",
                topics: [
                    "DevOps Culture, Principles, and Lifecycle",
                    "Linux Essentials: File System, Permissions, and Shell Scripting",
                    "Networking Fundamentals: DNS, HTTP, TCP/IP, SSH",
                    "Version Control with Git and GitHub (Branching, Rebasing, PRs)"
                ]
            },
            {
                week: 2,
                title: "Continuous Integration with Jenkins & GitHub Actions",
                topics: [
                    "Jenkins Installation, Pipelines, and Jenkinsfile",
                    "GitHub Actions: Workflows, Jobs, and Secrets",
                    "Build Automation: Maven, Gradle, and npm",
                    "Code Quality Gates with SonarQube"
                ]
            },
            {
                week: 3,
                title: "Docker & Containerization",
                topics: [
                    "Docker Architecture: Images, Containers, and Registries",
                    "Writing Dockerfiles and Multi-Stage Builds",
                    "Docker Compose for Multi-Container Applications",
                    "Container Networking and Volume Management"
                ]
            },
            {
                week: 4,
                title: "Kubernetes Fundamentals",
                topics: [
                    "Kubernetes Architecture: Master, Nodes, Pods, Services",
                    "Deployments, ReplicaSets, and Rolling Updates",
                    "ConfigMaps, Secrets, and Persistent Volumes",
                    "kubectl Mastery and YAML Manifests"
                ]
            },
            {
                week: 5,
                title: "Advanced Kubernetes & Helm",
                topics: [
                    "Ingress Controllers and Load Balancing",
                    "Helm Charts: Packaging and Deploying Applications",
                    "Horizontal Pod Autoscaling and Resource Management",
                    "RBAC, Network Policies, and Security Contexts"
                ]
            },
            {
                week: 6,
                title: "Infrastructure as Code: Terraform",
                topics: [
                    "Terraform Fundamentals: Providers, Resources, and State",
                    "Provisioning AWS Infrastructure (VPC, EC2, S3, RDS)",
                    "Terraform Modules and Workspaces",
                    "State Management and Backend Configuration"
                ]
            },
            {
                week: 7,
                title: "Configuration Management: Ansible",
                topics: [
                    "Ansible Architecture: Inventory, Playbooks, and Roles",
                    "Automating Server Configuration and Application Deployment",
                    "Ansible Galaxy and Custom Modules",
                    "Integrating Ansible with Terraform and CI/CD"
                ]
            },
            {
                week: 8,
                title: "Monitoring, Logging & Observability",
                topics: [
                    "Prometheus: Metrics Collection and PromQL",
                    "Grafana: Dashboards, Alerts, and Visualization",
                    "ELK Stack: Elasticsearch, Logstash, and Kibana",
                    "Distributed Tracing with Jaeger"
                ]
            },
            {
                week: 9,
                title: "Cloud Platforms & GitOps",
                topics: [
                    "AWS Core Services for DevOps (ECS, EKS, CodePipeline)",
                    "GitOps Principles with ArgoCD and Flux",
                    "Service Mesh with Istio",
                    "Secrets Management with HashiCorp Vault"
                ]
            },
            {
                week: 10,
                title: "Capstone Project & Career Prep",
                topics: [
                    "End-to-End DevOps Pipeline: Code to Production",
                    "Multi-Environment Deployment Strategy (Dev/Staging/Prod)",
                    "Incident Response and Runbook Automation",
                    "Mock Interviews and Resume Preparation"
                ]
            }
        ]
    },

    {
        id: "cybersecurity-professional",
        name: "Cybersecurity",
        tagline: "Defend, Detect, and Respond to Cyber Threats",
        duration: "10 Weeks",
        level: "Intermediate",
        description: "Gain in-demand cybersecurity skills covering network defense, ethical hacking, threat analysis, cloud security, and incident response with hands-on labs.",
        image: "/images/CyberSecurity.jpeg",
        gradient: "from-slate-800 via-emerald-900 to-green-800",
        certifications: [
            "CompTIA Security+ Exam Prep",
            "Certified Ethical Hacker (CEH) Prep",
            "AWS Security Specialty Prep",
            "Course Completion Certificate"
        ],
        prerequisites: [
            "Basic networking knowledge (TCP/IP, DNS, HTTP)",
            "Familiarity with Linux and Windows OS",
            "Understanding of basic programming concepts"
        ],
        outcomes: [
            "Identify, assess, and mitigate security vulnerabilities across networks and applications",
            "Perform ethical hacking and penetration testing using industry-standard tools",
            "Implement security controls for cloud environments (AWS, Azure)",
            "Build and manage SIEM solutions and incident response workflows"
        ],
        syllabus: [
            {
                week: 1,
                title: "Cybersecurity Foundations",
                topics: [
                    "CIA Triad, Security Frameworks (NIST, ISO 27001)",
                    "Threat Landscape: Malware, Phishing, Ransomware, APTs",
                    "Networking for Security: OSI Model, Firewalls, VPNs",
                    "Security Policies, Risk Assessment, and Compliance"
                ]
            },
            {
                week: 2,
                title: "Operating System & Endpoint Security",
                topics: [
                    "Linux Security: File Permissions, iptables, SELinux",
                    "Windows Security: Group Policy, Event Logs, PowerShell",
                    "Endpoint Detection and Response (EDR) Tools",
                    "Hardening Servers and Workstations"
                ]
            },
            {
                week: 3,
                title: "Network Security & Defense",
                topics: [
                    "Firewall Configuration and IDS/IPS Systems",
                    "Network Traffic Analysis with Wireshark and tcpdump",
                    "VPN, NAC, and Zero Trust Architecture",
                    "Wireless Security: WPA3, Evil Twin, and Rogue AP Detection"
                ]
            },
            {
                week: 4,
                title: "Ethical Hacking & Penetration Testing",
                topics: [
                    "Reconnaissance: OSINT, Nmap, and Shodan",
                    "Vulnerability Scanning with Nessus and OpenVAS",
                    "Exploitation with Metasploit Framework",
                    "Social Engineering Attacks and Defenses"
                ]
            },
            {
                week: 5,
                title: "Web Application Security",
                topics: [
                    "OWASP Top 10 Vulnerabilities (SQLi, XSS, CSRF)",
                    "Web App Penetration Testing with Burp Suite",
                    "Secure Coding Practices and Input Validation",
                    "API Security: Authentication, Authorization, and Rate Limiting"
                ]
            },
            {
                week: 6,
                title: "Cryptography & Identity Management",
                topics: [
                    "Symmetric and Asymmetric Encryption (AES, RSA, ECC)",
                    "Hashing, Digital Signatures, and PKI",
                    "Identity and Access Management (IAM) and SSO",
                    "Multi-Factor Authentication and OAuth 2.0/OIDC"
                ]
            },
            {
                week: 7,
                title: "Cloud Security",
                topics: [
                    "AWS Security: IAM Policies, Security Groups, GuardDuty",
                    "Azure Security Center and Defender for Cloud",
                    "Container Security: Docker Scanning and K8s Policies",
                    "Cloud Compliance: SOC 2, HIPAA, and GDPR"
                ]
            },
            {
                week: 8,
                title: "Security Operations & SIEM",
                topics: [
                    "Security Information and Event Management (SIEM) Overview",
                    "Splunk: Log Ingestion, Searches, and Dashboards",
                    "Threat Intelligence and Indicator of Compromise (IoC)",
                    "Building Detection Rules and Alert Workflows"
                ]
            },
            {
                week: 9,
                title: "Incident Response & Digital Forensics",
                topics: [
                    "Incident Response Lifecycle (NIST SP 800-61)",
                    "Memory and Disk Forensics with Volatility and Autopsy",
                    "Malware Analysis: Static and Dynamic Techniques",
                    "Chain of Custody and Legal Reporting"
                ]
            },
            {
                week: 10,
                title: "Capstone Project & Certification Prep",
                topics: [
                    "End-to-End Security Audit of a Simulated Enterprise",
                    "Penetration Testing Report and Remediation Plan",
                    "CompTIA Security+ Practice Exam Walkthrough",
                    "Mock Interviews and Resume Preparation"
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