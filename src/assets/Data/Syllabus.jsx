


const SyllabusData = {
  "CG": {
    "Subject": "Computer Graphics",
    "ShortName": "CG",
    "Credit": "3",
    "Faculty": "Prof. R. Rama Kishore",
    "SubjectCode": "ICT 202",
    "syllabus": [
      {
        "unit": 1,
        "title": "Introduction to Graphics and Raster Algorithms",
        "topics": [
          "Introduction to graphics and types of graphics",
          "Quality parameters of graphics display",
          "Basic raster graphics algorithms for drawing 2D primitives: DDA line, Bresenham’s line, Bresenham’s circle, midpoint circle, midpoint ellipse",
          "Conic Sections",
          "Clipping of line (Cohen Sutherland algorithm), Clipping of polygon (Sutherland Hodgeman algorithm)",
          "Polygon filling",
          "Attributes of Output primitives",
          "Antialiasing"
        ]
      },
      {
        "unit": 2,
        "title": "Geometric Manipulations and Modelling",
        "topics": [
          "Geometric manipulation in 2D and 3D space",
          "Window to viewport transformations",
          "Homogeneous coordinates",
          "Projections: Parallel and perspective projections",
          "Generating curves like Hermite, Bezier, and B-spline",
          "Surface generation",
          "Wireframe, surface, and solid modelling",
          "3-D polygon surfaces, polygon tables, polygon meshes"
        ]
      },
      {
        "unit": 3,
        "title": "Visible Surface Determination and Shading Techniques",
        "topics": [
          "Visible surface determination techniques: Z-buffer, A-buffer algorithm, scanline algorithm, area subdivision algorithm for hidden surface removal",
          "Achromatic and hardware color models",
          "Software color models",
          "Local and global illumination models calculations",
          "Shading techniques: Lambert, Gouraud, Phong shading"
        ]
      },
      {
        "unit": 4,
        "title": "Rendering and Advanced Modelling",
        "topics": [
          "Rendering: Introduction to ray casting, ray-tracing, recursive ray tracing, and shadows",
          "Advanced procedural modelling: Fractals, concept of fractals generation",
          "Concept of grammar-based modelling"
        ]
      }
    ]
  },
  "CM": {
    "Subject": "Computational Methods",
    "ShortName": "CM",
    "Credit": "4",
    "Faculty": "Prof. Pravin Chandra",
    "SubjectCode": "ICT 204",
    "syllabus": [
      {
        "unit": 1,
        "title": "Introduction to Numerical Methods",
        "topics": [
          "Review of Taylor Series, Rolle’s Theorem and Mean Value Theorem",
          "Approximations and Errors in numerical computations",
          "Data representation and computer arithmetic",
          "Loss of significance in computation",
          "Location of roots of equation: Bisection method (convergence analysis and implementation)",
          "Newton Method (convergence analysis and implementation)",
          "Secant Method (convergence analysis and implementation)",
          "Unconstrained one variable function minimization by Fibonacci search, Golden Section Search, and Newton’s method",
          "Multivariate function minimization by the method of steepest descent, Nelder-Mead Algorithm"
        ]
      },
      {
        "unit": 2,
        "title": "Interpolation and Numerical Integration",
        "topics": [
          "Assumptions for interpolation, errors in polynomial interpolation",
          "Finite differences",
          "Gregory-Newton’s Forward Interpolation",
          "Gregory-Newton’s Backward Interpolation",
          "Lagrange’s Interpolation",
          "Newton’s Divided Difference Interpolation",
          "Numerical Integration: Definite Integral, Newton-Cote’s Quadrature formula",
          "Trapezoidal Rule, Simpson’s one-third rule, Simpson’s three-eight rule",
          "Errors in quadrature formulae, Romberg’s Algorithm, Gaussian Quadrature formula"
        ]
      },
      {
        "unit": 3,
        "title": "Linear Algebraic Equations and Splines",
        "topics": [
          "System of Linear Algebraic Equations: Existence of solution",
          "Gauss elimination method and its computational effort",
          "Concept of Pivoting, Gauss Jordan method and its computational effort",
          "Triangular Matrix factorization methods: Dolittle algorithm, Crout’s Algorithm, Cholesky method",
          "Eigen value problem: Power method",
          "Approximation by Spline Function: First-Degree and Second Degree Splines",
          "Natural Cubic Splines, B Splines, Interpolation and Approximation"
        ]
      },
      {
        "unit": 4,
        "title": "Numerical Solutions of Differential Equations",
        "topics": [
          "Numerical solution of ordinary Differential Equations: Picard’s method, Taylor series method, Euler’s and Runge-Kutta’s methods",
          "Predictor-corrector methods: Euler’s method, Adams-Bashforth method, Milne’s method",
          "Numerical Solution of Partial Differential equations: Parabolic, Hyperbolic, and Elliptic equations",
          "Implementation to be done in C/C++"
        ]
      }
    ]
  },
  "DAA": {
    "Subject": "Design and Analysis of Algorithms",
    "ShortName": "DAA",
    "Credit": "4",
    "Faculty": "Dr. Anuradha Chug",
    "SubjectCode": "ICT 206",
    "syllabus": [
      {
        "unit": 1,
        "title": "Algorithm Design Paradigms and Sorting",
        "topics": [
          "Growth of Functions",
          "Summations",
          "Algorithm Design Paradigms",
          "Divide and Conquer Strategy",
          "Strassen’s algorithm for matrix multiplication",
          "Analysis of Merge Sort, Quick Sort, and Heap Sort",
          "Sorting in Linear Time: Counting Sort, Radix Sort, Bucket Sort",
          "Medians and Order Statistics",
          "Disjoint Set Operations: Rooted Tree Representations, Linked List Representation of Disjoint Sets, Disjoint Set Forests"
        ]
      },
      {
        "unit": 2,
        "title": "Dynamic Programming, Greedy Algorithms, and String Matching",
        "topics": [
          "Matrix Chain Multiplication",
          "Longest Common Subsequence (LCS)",
          "Optimal Binary Search Tree",
          "General Greedy Approach Vs Dynamic Programming Approach",
          "Case Studies: Knapsack Problem, Huffman Coding Problem, Matroids",
          "String Matching: The Naïve String Matching Algorithm",
          "The Rabin Karp Algorithm",
          "String Matching with Finite Automata",
          "The Knuth Morris Pratt Algorithm"
        ]
      },
      {
        "unit": 3,
        "title": "Graph Algorithms",
        "topics": [
          "Representation of Graphs",
          "Breadth First Search (BFS)",
          "Depth First Search (DFS)",
          "Topological Sort",
          "Strongly Connected Components",
          "Algorithms of Kruskal and Prim",
          "Dijkstra’s Algorithm",
          "Bellman-Ford Algorithm",
          "All Pair Shortest Path",
          "Floyd-Warshall Algorithm"
        ]
      },
      {
        "unit": 4,
        "title": "NP-Complete Problems",
        "topics": [
          "Polynomial Time Verification",
          "NP-Completeness",
          "Satisfiability and Reducibility",
          "NP-Completeness Proof",
          "NP-Complete Problems: The Vertex-Cover Problem, The Traveling-Salesman Problem, The Set-Covering Problem, The Hamilton Circuit Problem"
        ]
      }
    ]
  },
  "TOC": {
    "Subject": "Theory of Computation",
    "ShortName": "TOC",
    "Credit": "4",
    "Faculty": "Dr. Arshi Husain",
    "SubjectCode": "ICT 208",
    "syllabus": [
      {
        "unit": 1,
        "title": "Automata and Language Theory",
        "topics": [
          "Chomsky Classification",
          "Finite Automata",
          "Deterministic Finite Automata (DFA)",
          "Non-Deterministic Finite Automata (NFA)",
          "Regular Expressions",
          "Equivalence of DFAs, NFAs and Regular Expressions",
          "Closure properties of Regular Grammar",
          "Non-Regular Languages",
          "Pumping Lemma"
        ]
      },
      {
        "unit": 2,
        "title": "Context-Free Languages",
        "topics": [
          "Context Free Grammar (CFG)",
          "Parse Trees",
          "Push Down Automata (deterministic and non-deterministic) (PDA)",
          "Equivalence of CFGs and PDAs",
          "Closure properties of CFLs",
          "Pumping Lemma for CFLs",
          "Parsing",
          "LL(K) Grammar"
        ]
      },
      {
        "unit": 3,
        "title": "Turing Machines and Computability Theory",
        "topics": [
          "Definition, Design and Extensions of Turing Machine",
          "Equivalence of various Turing Machine Formalisms",
          "Church – Turing Thesis",
          "Decidability",
          "Halting Problem",
          "Reducibility and its use in proving undecidability",
          "Rice's Theorem",
          "Undecidability of Post’s Correspondence Problem",
          "Recursion Theorem"
        ]
      },
      {
        "unit": 4,
        "title": "Complexity Theory",
        "topics": [
          "The class P as consensus class of tractable sets",
          "Classes NP, co-NP",
          "Polynomial time reductions",
          "NP-completeness, NP-hardness",
          "Cook-Levin Theorem (with proof)",
          "Space Complexity",
          "PSPACE and NPSPACE complexity classes",
          "Savitch Theorem (with proof)",
          "Probabilistic computation, BPP class",
          "Interactive proof systems and IP class",
          "Relativized computation and Oracle"
        ]
      }
    ]
  },
  "SE": {
    "Subject": "Software Engineering",
    "ShortName": "SE",
    "Credit": "3",
    "Faculty": "Dr. Ruchi Sehrawat",
    "SubjectCode": "ICT 210",
    "syllabus": [
      {
        "unit": 1,
        "title": "Introduction to Software Processes and Agile Development",
        "topics": [
          "Software processes and its models: Waterfall, Incremental Development, Spiral Model, Re-use Oriented Model, Prototype",
          "Process Activities",
          "Process Improvement: CMM Levels",
          "Agile Development Model",
          "Plan Driven vs Agile Model of Development",
          "Agile Methods and Development Techniques: User Stories, Refactoring, Test First Development, Pair Programming",
          "Agile Project Management (SCRUM Agile Method)"
        ]
      },
      {
        "unit": 2,
        "title": "Requirement Engineering, Estimation, and System Modelling",
        "topics": [
          "Functional and Non-functional Requirements",
          "Requirement Elicitation",
          "Use Case Development",
          "Requirement Analysis and Validation",
          "Requirement Review or Requirement Change",
          "SRS Document",
          "Software Size Estimation: LOC and Function Point",
          "Cost and Effort Estimation, COCOMO",
          "ISO 9001:2015 Certification",
          "System Modelling: Interaction Models (Use Case Diagram, Sequence Diagrams)",
          "Structural Models: Class Diagrams, Generalization, Aggregation",
          "Behavioural Models: ER Diagrams, Data Flow Diagrams, Data Dictionaries"
        ]
      },
      {
        "unit": 3,
        "title": "Software Design, Quality, and Evolution",
        "topics": [
          "Architectural Views and Patterns",
          "Modularity: Cohesion and Coupling",
          "Information Hiding",
          "Functional Independence",
          "Function Oriented Design",
          "Object Oriented Design",
          "Service-Oriented Architecture (SOA)",
          "Software as a Service (SAAS)",
          "Software Quality: McCall’s Quality Factors, ISO 9126 Quality Factors",
          "Quality Control and Quality Assurance",
          "Software Reliability",
          "Software Evolution: Evolution Process, Legacy System",
          "Software Maintenance: Maintenance Prediction, Re-Engineering, Refactoring"
        ]
      },
      {
        "unit": 4,
        "title": "Software Testing and System Security",
        "topics": [
          "Software Testing: Verification, Validation",
          "Development Testing: Unit Testing, Component Testing, System Testing, Test Driven Development (TDD)",
          "Release Testing: Requirement Based Testing, Scenario Testing, Performance Testing",
          "User Testing: Alpha, Beta, and Acceptance Testing",
          "Regression Testing, Stress Testing",
          "System Security: Reliability Engineering, Reliability Requirements (Functional and Non-functional) and its Measurement",
          "Safety Engineering: Safety Critical Systems and their Requirements",
          "Security Engineering: Security Guidelines and Requirements"
        ]
      }
    ]
  },
  "CN": {
    "Subject": "Computer Networks",
    "ShortName": "CN",
    "Credit": "4",
    "Faculty": "Prof. M. Balakrishna",
    "SubjectCode": "ICT 212",
    "syllabus": [
      {
        "unit": 1,
        "title": "Network Protocols and Transport Layer",
        "topics": [
          "Overview of Protocol Suites: TCP/IP and OSI",
          "History and Standards of Protocol Suites",
          "Application Layer: Application Layer Paradigm, Client-Server Paradigm",
          "Standard Client-Server Applications",
          "Peer-to-Peer (P2P) Systems",
          "Socket Interface Programming",
          "Transport Layer: Simple Protocols, Stop-and-Wait, GBN, Selective Repeat, Bidirectional Protocols",
          "Internet Transport Layer Protocols: UDP, TCP"
        ]
      },
      {
        "unit": 2,
        "title": "Network Layer and Data-Link Layer (Wired Networks)",
        "topics": [
          "Network Layer: Introduction to IPv4, ICMPv4",
          "Unicast Routing, Multicast Routing",
          "IPv6, ICMPv6",
          "Data-Link Layer (Wired Networks): Introduction to DLC, Multiple Access Protocols",
          "Wired LANs: Ethernet and others"
        ]
      },
      {
        "unit": 3,
        "title": "Data-Link Layer (Wireless Networks), Physical Layer, and Multimedia",
        "topics": [
          "Data-Link Layer (Wireless Networks): Introduction to IEEE 802.11, Bluetooth, WiMAX",
          "Cellular Telephony, Satellite Networks, Mobile IP",
          "Physical Layer and Transmission Media: Data and Signals, Digital and Analog Transmission",
          "Bandwidth Utilization, Transmission Media",
          "Multimedia and QoS: Data Types, Streaming of Audio/Video",
          "Real-time Interactive Protocols",
          "Quality of Service (QoS)"
        ]
      },
      {
        "unit": 4,
        "title": "Network Management and Security",
        "topics": [
          "Network Management: Introduction to SNMP, ASN.1",
          "Security: Introduction to Ciphers",
          "Application Layer Security, Transport Layer Security, Network Layer Security",
          "Packet Filter Firewall, Proxy Firewall",
          "Programming: Socket Programming"
        ]
      }
    ]
  },
  "AE": {
    "Subject": "Accountancy for Engineers",
    "ShortName": "AE",
    "Credit": "2",
    "Faculty": "Dr Ashima Negi",
    "SubjectCode": "MS 214",
    "syllabus": [
      {
        "unit": 1,
        "title": "Introduction to Accounting",
        "topics": [
          "Objectives and Nature of Accounting",
          "Definitions and Functions of Accounting",
          "Book Keeping and Accounting",
          "Interrelationship of Accounting with other Disciplines",
          "Branches and Limitations of Accounting",
          "Accounting Principles, Concepts and Conventions"
        ]
      },
      {
        "unit": 2,
        "title": "Journal Entries and Ledger Posting",
        "topics": [
          "Journal Entries",
          "Compound Journal Entries",
          "Opening Entry",
          "Ledger Posting and Trial Balance",
          "Preparation of Ledger",
          "Posting",
          "Cash Book",
          "Sales and Purchase Book",
          "Trial Balance"
        ]
      },
      {
        "unit": 3,
        "title": "Preparation of Final Accounts",
        "topics": [
          "Preparation of Final Accounts with Adjustment",
          "Trading Account",
          "Profit and Loss Account",
          "Balance Sheet",
          "Green Accounting",
          "Social Responsibility Accounting",
          "Accounting Ethics"
        ]
      },
      {
        "unit": 4,
        "title": "Depreciation Accounting",
        "topics": [
          "Concept of Depreciation",
          "Causes and Features of Depreciation",
          "Depreciation Accounting",
          "Fixation of Depreciation Amount",
          "Methods of Recording Depreciation",
          "Methods of Providing Depreciation",
          "Depreciation Policy"
        ]
      }
    ]
  }
};

const GetSyllabusData = function(subject){
  // console.log("syllabus: ",subject, SyllabusData[subject]);
    return SyllabusData[subject];
}

export default GetSyllabusData;