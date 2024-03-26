



MotorPH OneSuite System Documentation

Prepared and Presented by:

Lopez, Sherilou
Lao, Winston Ace
Bansas, Rhona Lynne
Bachelor of Science in information Technology
2nd Term, S.Y. 2023-2024















TABLE OF CONTENTS

Section

 1	 	Introduction
User Roles
Navigating The User Guide									    
 2	 	Getting Started
Hardware Prerequisites
Software Prerequisites
Accessing The System								

 3		Using the Payroll System
Secure Login Procedures
Dashboard Section
Home Section
My Profile Section
Employee Management Section (For HR Administrator Only)
Ticket Management Section
Action Service Request Section (For HR, Payroll, and IT Administrator Only)
User Access Management (For IT Administrator Only)
Timesheet Management Section | Time Entry
Timesheet Management Section | My Timesheet
Timesheet Management Section | Timesheet Manager (HR Admin Only)
Leave Request Section
Leave Request Section | Leave Manager (HR Administrator Only)
Payslip Management Section
Payslip Management Section | Payslip Generator (Payroll Admin Only)

 4		Technical Information
		Use Case Diagram
		Class Diagram
		Testing

1.	Introduction

The MotorPH OneSuite stands as a pinnacle of modern software engineering, meticulously engineered to revolutionize and simplify the intricate landscape of payroll management within any organization. With its robust features and intuitive design, this comprehensive solution serves as a beacon of efficiency, streamlining and automating every aspect of the payroll process. From centralized employee information management to seamless service request handling, meticulous time and attendance tracking, efficient leave and absence management, precise salary calculations, meticulous deduction management, and comprehensive withholding tax processing, MotorPH OneSuite is a one-stop solution for all payroll-related needs. Moreover, it serves as a secure repository for payslips, ensuring that every piece of vital information remains easily accessible yet impeccably safeguarded. By employing this system, MotorPH empowers itself to uphold impeccable data accuracy, navigate regulatory complexities with ease, and foster an ecosystem of unparalleled efficiency and compliance throughout the organization.

This user guide represents an indispensable resource for users delving into the intricacies of the MotorPH OneSuite. Crafted with precision and clarity, it aims to arm users with the knowledge and skills necessary to navigate the system adeptly, extracting maximum value from its myriad functionalities. Whether it's understanding the nuances of data entry, exploring the depths of reporting capabilities, or mastering the art of customizing settings to align with organizational needs, this guide provides comprehensive coverage. By empowering users with in-depth insights and practical guidance, it ensures that the MotorPH OneSuite becomes not just a tool but a strategic asset, driving efficiency, compliance, and success across the organization's payroll management endeavors.











1.1.	User Roles

In the MotorPH OneSuite, four primary user roles interact with the software to facilitate efficient payroll management: employees, HR personnel, payroll administrators, and IT administrators. Employees utilize the system to access their personal information, submit service requests, and view payslips. HR personnel oversee employee data management, process leave requests, and generate reports for organizational analysis. Payroll administrators handle salary calculations, deductions, and tax management, ensuring accurate payroll processing. IT administrators maintain system integrity, handle user access permissions, and provide technical support to ensure smooth system operation. Each user role plays a vital role in the seamless functioning of the MotorPH OneSuite, contributing to streamlined payroll processes and organizational efficiency.


 







1.2.	Navigating The User Guide  
1.	Open the Initial URL:
●	Open your preferred web browser.
●	In the address bar, type or paste the following URL: https://motorph-onesuite.my.canva.site/about and press Enter.
●	This will take you to the initial page of the user guide hosted on Canva.
2.	Click on "Learn More":
●	Navigate to the section of the page where the "Learn More" link is located.
●	Click on the "Learn More" link.
3.	Access the Secondary URL:
●	Upon clicking the "Learn More" link, the browser will redirect you to a new URL: https://winsace.github.io/motorph/.
●	This URL hosts the detailed user guide for Motorph.
4.	Utilize the PDF Viewer for Navigation:
●	The provided link directs you to an online PDF viewer that displays the user guide document.
●	The PDF viewer is equipped with bookmark functionality for easy navigation through different sections of the user guide.
●	You can navigate through the document using the provided bookmarks for efficient browsing and reference. For example:
 



2.	Getting Started

2.1.	Hardware Prerequisites
Minimum System Requirements:
●	CPU: Dual-core processor (e.g., Intel Core i3 or AMD equivalent)
●	RAM: 4 GB DDR3 RAM
●	Storage: 50 GB available hard disk space
●	Internet Connectivity: Required for downloading and installing software dependencies, updates, and accessing online resources if necessary.
●	Operating System:
●	Windows 7 or newer
●	macOS 10.12 Sierra or newer
●	Linux (Ubuntu 16.04 or equivalent)
Recommended System Requirements:
●	CPU: Quad-core processor (e.g., Intel Core i5 or AMD equivalent)
●	RAM: 8 GB DDR4 RAM
●	Storage: 100 GB available hard disk space (SSD recommended for better performance)
●	Internet Connectivity: Required for optimal performance, including downloading updates, accessing online resources, and community support.
●	Operating System:
●	Windows 10 or newer
●	macOS 10.14 Mojave or newer
●	Linux (Ubuntu 20.04 LTS or equivalent)







2.2.	Software Prerequisites
1. Visual Studio Code:
●	Description: Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux, and macOS.
●	Version: Ensure you have the latest stable version installed.
●	Download Link: Visual Studio Code
2. Node.js:
●	Description: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side.
●	Version: Ensure you have the latest LTS (Long Term Support) version installed.
●	Download Link: Node.js
3. Nodemon:
●	Description: Nodemon is a utility that monitors for any changes in your source code and automatically restarts your server.
●	Installation: After Node.js is installed, run the following command in your terminal:
 
4. Express:
●	Description: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
●	Installation: After Node.js is installed, you can install Express in your project by running the following command in your terminal within your project directory:
 
5. NPM Packages:
●	csv-parser: A streaming CSV parser that aims for maximum speed and minimal memory usage.
●	csv-write: A CSV serializer for Node.js.
●	cors: Cross-Origin Resource Sharing middleware for Express.js.
●	Installation: After Node.js is installed, run the following commands in your terminal:
 
6. Internet Browser:
●	Description: Any modern internet browser such as Chrome, Safari, Edge, Firefox, etc.
●	Version: Ensure you have the latest stable version installed.
●	Download Links:
●	Google Chrome
●	Safari
●	Microsoft Edge
●	Mozilla Firefox















2.3.	Accessing The System

1.	Launch Visual Studio Code:
●	Locate and open the Visual Studio Code application on your computer. You can typically find it in your applications folder (on macOS) or in the Start menu (on Windows).

2.	Download the project folder:
●	Visit the GitHub repository link: https://github.com/winsace/OOP/tree/main/motorph.
●	Navigate to the src folder by clicking on it.
●	Once you're inside the src folder, you should see the server.js file along with other files and folders.
●	To download the entire src folder, click on the green "Code" button located towards the right side of the screen.
●	In the dropdown menu, click on "Download ZIP". This will download the entire repository, including the src folder and its contents, as a ZIP file to your computer.
●	After the ZIP file is downloaded, locate it in your downloads folder or the directory where your browser saves downloads.
●	Extract the contents of the ZIP file. Inside, you'll find the src folder containing the necessary files, including server.js.

3.	Open the project folder:
●	Within Visual Studio Code, navigate to the folder containing your Node.js project files. You can either use the "File" menu to open a folder or simply drag and drop the folder into Visual Studio Code's interface.


4.	Run the Node.js application with Nodemon:
●	Open the integrated terminal in Visual Studio Code. You can do this by selecting "Terminal" from the top menu and choosing "New Terminal".
●	Navigate to the project directory within the terminal. You can use the cd command followed by the path to your project directory.
●	Instead of using the node command to run your Node.js application, use nodemon followed by the main script name. For example:

 

●	Replace server.js with the name of your main Node.js script file.
●	Nodemon will start the application and monitor for any changes in your code. Whenever you save changes to the code, Nodemon will automatically restart the application, making the development process smoother.

5.	Server Launch Confirmation:
●	After running the command, you'll see the output message "Server running at http://localhost:3000" in the terminal, indicating that the server is up and running. You can then access the application by opening a web browser and navigating to http://localhost:3000. This URL corresponds to your local machine and the port on which the server is running. For example:
 


6.	Accessing the Application via Web Browser:
●	Open any web browser on your computer.
●	In the address bar of the web browser, type http://localhost:3000 and press Enter.
●	This will open the application in the web browser, as the server is running locally on port 3000.
●	You should now see the homepage or landing page of MotorPH OneSuite, as served by the Node.js server.
         MotorPH OneSuite Landing Page
 











3.	Using The Payroll System

3.1.	Secure Login Procedures
Logging into the MotorPH OneSuite involves a secure authentication process requiring a username and password. Once provided, the system verifies the credentials and checks the user's role to determine the appropriate dashboard access based on Role-Based Access Control (RBAC) principles.
	1. Username and Password:
●	Users are required to enter their unique username and password into the designated login fields provided by the MotorPH OneSuite login interface.
MotorPH OneSuite Landing Page 

	2. Credential Verification:
●	Upon submission, the system authenticates the provided username and password against the stored credentials in the database.
●	Verification involves hashing and comparing the password hash stored in the database with the hash generated from the provided password.
Example 1: Successful Login 





Example 2: Incorrect Credentials 

Example 3: Strict Password Requirement 
	3. Role-Based Access Control (RBAC):
●	After successful credential verification, the system retrieves the user's role information associated with the provided username.
●	RBAC principles dictate that each user is assigned one or more roles, each with a predefined set of permissions and access rights.

	4. Dashboard Routing:
●	Based on the user's role, the system determines the appropriate dashboard to route the user to upon login.
●	Different roles may have access to different features, functionalities, or sections within the application.
●	For example, administrators might have access to administrative controls and settings, while regular users may have access limited to specific functionalities relevant to their role.
Role-based access control routing
 






3.2.	Dashboard Section
The Dashboard section of MotorPH OneSuite serves as the central hub for users to access role-specific information, tools, and functionalities based on their assigned roles, which may include Employee, HR Admin, Payroll Admin, or IT Admin. The Dashboard is designed to provide users with a customized and intuitive interface that optimizes their workflow and enhances productivity. Key components of the Dashboard include:

1.	Role-Based Access:
●	The Dashboard is customized to display components and features relevant to the user's assigned role.
●	Depending on their role (e.g., Employee, HR Admin, Payroll Admin, or IT Admin), users will see different sidebar components and functionalities tailored to their specific responsibilities and permissions.

2.	Sidebar Navigation:
●	The sidebar navigation menu presents users with a list of accessible modules, features, and tools based on their role.
●	Sidebar components may include options for managing employee data, processing payroll, accessing HR-related functions, user access management, and more.
●	Users can easily navigate between different sections of the application by clicking on the corresponding sidebar items.

3.	Logout Button:
●	A prominent logout button is provided on the Dashboard to allow users to securely sign out of their account.
●	Clicking the logout button ensures that the user's session is terminated, preventing unauthorized access to their account and maintaining data security.




Example: Employee Dashboard
 
		
3.3.	Home Section
The Home section serves as the welcome page on the dashboard of MotorPH OneSuite. Upon logging in, users are directed to this section, where they are greeted with relevant information and updates. The primary purpose of the Home section is to provide users with a centralized hub for accessing essential data and functionalities, as well as facilitating quick navigation to other sections of the application.

1.	Welcome Message:
●	The Home section features a welcoming message or greeting to acknowledge the user's login and provide a personalized experience.
●	The message may include the user's name or role, reinforcing a sense of recognition and engagement.

2.	Current Date and Time:
●	A prominent display of the current date and time is featured on the Home page.
●	This real-time information ensures users are informed of the latest updates and can plan their activities accordingly.


Example: Home Section
 

3.4.	My Profile Section
In MotorPH OneSuite, the "My Profile" feature enables employees to access and view their personal information, preferences, and settings within the system. This functionality empowers employees to manage their own profile details and ensures accuracy and privacy of their personal data.
	1. Accessing My Profile:
●	Upon logging in to the Dashboard, employees can navigate to the "My Profile" section, typically located in the user menu or sidebar navigation.
●	Clicking on the "My Profile" option directs users to a dedicated page or modal window displaying their profile information.

	2. Personal Information:
●	The profile page presents an overview of the employee's personal information, such as name, contact details, job title, department, and employee ID.
●	Users can review and update their contact information, including email addresses, phone numbers, and mailing addresses, as needed.
Example: My Profile 
Example: My Profile | Employee Information
 

3.5.	Employee Management Section (For HR Administrator Only)
The Employee Management section within MotorPH OneSuite is specifically designed for HR Administrators, providing them with comprehensive tools for managing employee data throughout the entire employee lifecycle. This section encompasses CRUD (Create, Read, Update, Delete) functionalities, allowing HR Administrators to efficiently handle employee-related tasks with ease.

1.	Employee Listing:
●	HR Administrators are presented with a comprehensive listing of all employees within the organization.
●	The listing typically includes essential employee details such as name, employee ID, department, position, contact information, and employment status.

2.	Create New Employee:
●	HR Administrators have the ability to add new employees to the system by filling out a structured form.
●	The form collects relevant employee information including personal details, employment information, contact details, and any other required data fields.
●	Upon submission, the newly created employee record is added to the system database.

3.	View Employee Details:
●	HR Administrators can view detailed information about individual employees by accessing their respective profiles.
●	The employee profile displays all relevant information collected during the employee onboarding process, allowing HR Administrators to review employment history, performance evaluations, training records, and more.

4.	Update Employee Information:
●	HR Administrators have the capability to update employee information as needed to reflect changes in employment status, contact details, job roles, or other relevant data.
●	The system provides editable fields within the employee profile interface, enabling HR Administrators to make necessary updates with ease.

5.	Delete Employee Record:
●	HR Administrators are empowered to remove employee records from the system when necessary.
●	Deleting an employee record ensures that their information is no longer accessible within the system, helping maintain data accuracy and compliance with data protection regulations.

6.	Search and Filter Functionality:
●	The Employee Management section offers robust search and filter functionalities, allowing HR Administrators to quickly locate specific employees based on criteria such as name, department, or employment status.
●	Advanced filtering options enable HR Administrators to refine search results and narrow down employee listings as needed.

Example: Employee Management
 



3.6.	Ticket Management Section
The Ticket Management section in MotorPH OneSuite provides employees with a centralized platform to view, submit, and manage support tickets for various issues, inquiries, or requests. This feature streamlines communication between employees and support teams, ensuring timely resolution of issues and efficient handling of service requests. Key functionalities of the Ticket Management section include:

1.	Viewing Own Tickets:
●	Employees can access a dashboard or list view displaying all tickets associated with their account.
●	The list may include tickets they have submitted as well as tickets assigned to them for resolution or follow-up.

2.	Ticket Submission:
●	Employees have the ability to submit new tickets by filling out a ticket request form within the system.
●	The form typically includes fields for specifying the nature of the issue, providing a detailed description, selecting the priority level, and attaching relevant files or screenshots if needed.

3.	Ticket Categorization and Prioritization:
●	Tickets are categorized based on the type of request or issue, such as technical support, facilities maintenance, or administrative assistance.
●	Employees can prioritize their tickets based on urgency or impact, helping support teams allocate resources effectively and address critical issues promptly.

4.	Status Tracking and Updates:
●	Employees can track the status of their submitted tickets in real-time, from initial submission to resolution.
●	The system provides updates and notifications at each stage of the ticket lifecycle, keeping employees informed of progress and any actions required on their part.


5.	Communication and Collaboration:
●	The Ticket Management section facilitates communication between employees and support teams through integrated messaging features.
●	Employees can exchange messages with support agents, provide additional information or clarification, and receive updates on ticket progress directly within the system.

6.	Escalation and Assignment:
●	Support teams have the ability to escalate tickets to higher-level technicians or managers when necessary, based on predefined escalation rules or severity levels.
●	Tickets are assigned to specific support agents or teams responsible for resolution, ensuring accountability and timely handling of requests.

7.	Resolution and Closure:
●	Once an issue is resolved, support agents update the ticket status accordingly and provide details of the resolution.
●	Employees are notified of ticket closure and may have the opportunity to provide feedback or confirm that the issue has been satisfactorily resolved.
Example: My Ticket
 


Example: Create Ticket
 

3.7.	Action Service Request Section (For HR, Payroll, and IT Administrator Only)
The Action Service Request section in MotorPH OneSuite is specifically designed for HR, Payroll, and IT teams to efficiently manage and action service requests submitted by employees. This section serves as a centralized platform for team members to review, process, and resolve service tickets within their respective domains. Key features and functionalities of the Action Service Request section include:

1.	Ticket Review and Prioritization:
●	HR, Payroll, and IT teams have access to a dashboard or list view displaying all service requests assigned to their respective departments.
●	Tickets are prioritized based on urgency, impact, or predefined service level agreements (SLAs), enabling teams to focus on high-priority issues first.

2.	Search Functionality:
●	The section features robust search functionality that allows team members to quickly locate specific tickets based on various criteria, such as ticket ID, requester name, or issue category.
●	Advanced search filters may also be available to narrow down search results and streamline ticket retrieval.

3.	Ticket Assignment and Ownership:
●	Service requests are assigned to individual team members or designated groups within the HR, Payroll, or IT departments.
●	Assigned team members take ownership of tickets and are responsible for managing the resolution process from start to finish.

4.	Ticket Details and Context:
●	Team members can access comprehensive details and context information associated with each service request, including the requester's contact information, ticket description, attachments, and any previous communication history.
●	Having access to relevant context facilitates informed decision-making and ensures accurate problem diagnosis and resolution.

Example: Action Service Request
 




3.8.	User Access Management (For IT Administrator Only)
The User Access Management section in MotorPH OneSuite is designed specifically for IT Administrators to manage user accounts, permissions, and access rights within the system. This functionality empowers IT Administrators to oversee user access levels, enforce security policies, and ensure compliance with organizational requirements. Key features of the User Access Management section include:

1.	User Account Creation and Deactivation:
●	IT Administrators can create new user accounts for employees or other system users as needed.
●	Additionally, they have the authority to deactivate or suspend user accounts when necessary, such as in cases of employee termination or account misuse.

2.	Permission Assignment and Role Management:
●	IT Administrators assign specific permissions and roles to user accounts based on their job responsibilities and access requirements.
●	Roles define a set of permissions and access rights, ensuring that users only have access to the functionalities and data relevant to their roles.

3.	Access Control Policies:
●	IT Administrators establish access control policies to govern user access to sensitive data and critical system functionalities.
●	Policies may include restrictions on data access, password complexity requirements, session management rules, and other security measures.








User Access Management
 


3.9.	Timesheet Management Section | Time Entry
Time and attendance tracking in MotorPH OneSuite facilitates efficient monitoring and management of employee work hours, attendance records, and related data. The system provides comprehensive features to streamline timekeeping processes and ensure accurate recording of attendance information.
	1. Employee Time-In/Time-Out:
●	Employees utilize designated features within the application to time in and time out of their shifts or work hours.
●	Time-in and time-out actions are timestamped and recorded in the system to track the start and end times of each work session.
Example: Time Entry 



Example 1: Time In 
Example 2: Time Out 

3.10.	Timesheet Management Section | My Timesheet
The Timesheet Management section in MotorPH OneSuite offers employees a convenient platform to access and review their own timesheet records, providing visibility into their work hours, attendance, and related data. This section enables employees to monitor their time worked, track attendance patterns, and ensure accuracy in recording their working hours. Key features of the Timesheet Management section include:

1.	Personalized Timesheet View:
●	Employees can access a personalized dashboard or interface displaying their individual timesheet records for specific time periods, such as daily, weekly, or monthly views.
●	Timesheet data is presented in a clear and organized format, showing details such as date, start time, end time, total hours worked, and any breaks taken.

2.	Date Range Selection:
●	The section allows employees to select custom date ranges to view timesheet records for specific time periods, enabling them to track their work hours over different timeframes.
●	Date range selectors or filters may be provided to facilitate easy navigation and retrieval of timesheet data for desired time periods.

3.	Attendance Tracking:
●	Timesheet records include information on employee attendance, including clock-in and clock-out times, as well as any deviations such as late arrivals or early departures.
●	Employees can review their attendance history and identify any discrepancies or irregularities in their work hours.







Example: My Timesheet
 


3.11.	Timesheet Management Section | Timesheet Manager (HR Admin Only)
The Timesheet Management section in MotorPH OneSuite provides HR Administrators with comprehensive tools to oversee and manage timesheet records for all employees within the organization. This functionality enables HR Admins to track employee work hours, monitor attendance patterns, and ensure compliance with labor regulations. Key features of the Timesheet Management section include:

1.	Centralized Timesheet Repository:
●	The section serves as a centralized repository for storing and accessing timesheet records for all employees across departments and locations.
●	HR Administrators can view and manage timesheets for individual employees or groups of employees within the organization.

2.	Employee Timesheet Records:
●	HR Administrators have access to detailed timesheet records for each employee, displaying information such as date, time in/out, total hours worked, breaks, and any additional notes or comments.
●	Timesheet records may be organized by pay period, week, or month for ease of tracking and analysis.

3.	Viewing and Editing Permissions:
●	HR Administrators have the authority to view and edit timesheet records for all employees within the organization.
●	They can review timesheet entries, make corrections or adjustments as needed, and ensure accuracy and completeness of the records.

4.	Timesheet Approval Workflow:
●	The section may include an approval workflow feature that allows HR Administrators to review and approve timesheets submitted by employees.
●	HR Administrators can verify timesheet accuracy, validate hours worked against scheduled shifts, and approve timesheets for payroll processing.

5.	Attendance Tracking and Reporting:
●	HR Administrators can track attendance patterns, identify trends, and generate reports on employee punctuality, absenteeism, and overtime hours.
●	Reporting functionalities provide insights into workforce productivity, resource allocation, and compliance with labor regulations.

6.	Integration with Payroll Systems:
●	Timesheet data can be seamlessly integrated with payroll systems to facilitate accurate payroll processing and ensure employees are compensated correctly for hours worked.
●	Integration eliminates manual data entry errors and streamlines the payroll workflow, saving time and reducing administrative overhead.

Example: Timesheet Manager 

3.12.	Leave Request Section
The Leave Request section in MotorPH OneSuite empowers employees to manage their leave requests efficiently while providing HR administrators with the tools to review, approve, and track employee leave across the organization. This feature streamlines the leave management process, ensures compliance with company policies, and promotes transparency in scheduling. Key functionalities of the Leave Request section include:

1.	Viewing Leave Request Record and Status:
●	Employees can view their submitted leave requests along with the current status of each request.
●	The section provides employees with visibility into the details of their leave requests, including requested dates, leave type, and the approval status (e.g., pending, approved, rejected).

2.	Leave Request Submission:
●	Employees can submit new leave requests directly through the system by selecting the type of leave, specifying the dates, and providing a reason or explanation for the request.
●	The leave request form may include additional fields for attaching supporting documents or notes, depending on company policies.

3.	Leave Calendar:
●	The Leave Request section features a visual leave calendar that displays approved leave requests, holidays, and other scheduled absences for individual employees and teams.
●	The calendar provides a clear overview of leave availability and helps prevent scheduling conflicts.

Example: My Leave Request
 

Example: Submit Leave Request
 

3.13.	Leave Request Section | Leave Manager (HR Administrator Only)
The Leave Request section in MotorPH OneSuite provides HR administrators with exclusive access to oversee and manage all leave requests submitted by employees throughout the organization. This dedicated functionality enables HR administrators to maintain control over leave management processes, ensure compliance with company policies, and facilitate efficient approval workflows. Key features of the Leave Request section for HR administrators include:


1.	Comprehensive Leave Request Overview:
●	HR administrators can access a comprehensive overview of all leave requests submitted by employees, including details such as requested dates, leave types, and the current status of each request.
●	The section provides a centralized view of leave requests across departments, allowing HR administrators to effectively manage leave allocation and scheduling.

2.	Approval Workflow Management:
●	HR administrators are responsible for reviewing and approving leave requests submitted by employees.
●	The section offers robust approval workflow management capabilities, allowing HR administrators to efficiently process leave requests, verify leave balances, and ensure compliance with company policies.

3.	Leave Request Status Tracking:
●	HR administrators can track the status of leave requests in real-time, from initial submission to final approval or rejection.
●	The section provides visibility into the entire leave request lifecycle, enabling HR administrators to monitor progress, address pending requests, and communicate with employees as needed.




Example: Leave Manager
 

3.14.	Payslip Management Section
The Payslip Management section in MotorPH OneSuite serves as a centralized repository for storing and accessing employee payslips. This feature facilitates efficient management of payroll-related documents and provides employees with convenient access to their earnings and deductions information. Key functionalities of the Payslip Management section include:

1.	Payslip Repository:
●	The section stores electronic copies of employee payslips in a secure and organized manner.
●	Payslips are categorized by pay period, employee name, or other relevant criteria for easy retrieval.

2.	Viewing Payslips:
●	Employees can access their payslips through the system to view detailed information about their earnings, deductions, taxes, and net pay for each pay period.
●	Payslips are presented in a user-friendly format that is easy to understand and navigate.



3.	Download and Printing:
●	Employees have the option to download or print their payslips directly from the system for their records or future reference.
●	This feature provides employees with flexibility in accessing and managing their payslip documents.

Example: My Payslip
 

3.15.	Payslip Management Section | Payslip Generator (Payroll Admin Only)
The Payslip Management section in MotorPH OneSuite provides Payroll Administrators with a dedicated toolset to generate accurate and comprehensive payslips for all employees within the organization. This feature streamlines the payroll process by automating salary calculations, deductions, taxes, and net pay, ensuring consistency and compliance with regulatory requirements. Key functionalities of the Payslip Generator include:

1.	Automated Salary Calculation:
●	The Payslip Generator automatically calculates employee salaries based on predefined wage rates, work hours, overtime, and other compensation factors.
●	Salary calculations are performed accurately and consistently, reducing the risk of manual errors and discrepancies.


2.	Deduction Management:
●	Payroll Administrators can configure and manage various deductions, such as taxes, insurance premiums, retirement contributions, and loan repayments.
●	Deductions are automatically applied to employee salaries based on established rules and regulations.

3.	Tax Calculation and Withholding:
●	The Payslip Generator incorporates tax tables and algorithms to calculate employee taxes accurately based on applicable tax rates, allowances, and exemptions.
●	Tax withholdings are calculated automatically and reflected on the employee's payslip, ensuring compliance with tax laws and regulations.

4.	Net Pay Calculation:
●	The system calculates the employee's net pay by subtracting deductions, taxes, and other withholdings from the gross salary.
●	Net pay is displayed prominently on the employee's payslip, providing a clear summary of take-home earnings after deductions.

Example: Payslip Generator
 


Example: Payslip
 







4.	Technical Information

4.1.	Use Case Diagram
The use case diagram offers a skeletal structure for a payroll system built using object-oriented principles. It identifies key classes like Employee, Payroll/HR, IT Admin, and Login. The diagram outlines inheritance for the Employee class and an aggregation relationship between Login and Employee. This indicates that Employee objects can exist independent of login functionality, while Login objects likely reference specific Employee data. Overall, the diagram provides a starting point for understanding potential object interactions within the payroll system design.

 





4.2.	Class Diagram
The class diagram provides a foundational understanding of how object-oriented principles can be applied to design a payroll system. It highlights the core classes involved in employee data management, timekeeping, leave requests, payslip generation, payroll processing, system administration, and login functionalities. The inheritance and associations provide insights into potential collaborations between these classes to achieve the system's functionalities.

 
4.3.	Testing

Test Case	Description
1. Access Landing Page	Ensure the landing page of MotorPH OneSuite is accessible.
2. Logging In	Verify login functionality with different scenarios.
2a. With Correct Credential	Confirm successful login with correct username and password.
2b. With Incorrect Credential	Validate appropriate error message is displayed when incorrect credentials are provided.
2c. Using Weak Password	Ensure error message is thrown when attempting to log in with a weak password that does not meet password requirements.
3. Route to Role-based Dashboard	Confirm dashboard display based on user roles.
3a. Log In as Employee Role	Ensure the dashboard displays correctly after logging in as an employee.
3b. Log In as HR Administrator	Verify the dashboard layout and components for HR administrators upon login.
3c. Log In as Payroll Administrator	Confirm the dashboard layout and functionalities for payroll administrators after login.
3d. Log In as IT Administrator	Check the dashboard layout and functionality for IT administrators after logging in.
4. Logout	Verify successful logout action returns the user to the landing page of MotorPH OneSuite.
5. Home - Display Date and Time	Confirm the home section displays the current date and time accurately.
6. My Profile - View Own Profile	Ensure employees can view their own profile information accurately.
7. Employee Management System	Validate CRUD operations and dynamic search functionality.
7a. Create	Verify the creation of employee records by HR administrators.
7b. View	Confirm HR administrators can view employee records accurately.
7c. Update	Ensure HR administrators can update employee records correctly.
7d. Delete	Validate HR administrators can delete employee records accurately.
7e. Dynamic Search	Confirm the dynamic search functionality retrieves employee records accurately based on specified criteria.
8. My Ticket Section	Validate ticket management functionalities.
8a. View Own Ticket	Ensure employees can view their own submitted tickets accurately.
8b. Submit Service Request Ticket	Validate employees can submit service request tickets accurately.
9. Ticket Management	Confirm actions and dynamic search functionality.
9a. Action Service Ticket Request	Ensure HR, payroll, and IT administrators can action service ticket requests accurately.
9b. Dynamic Search	Confirm the dynamic search functionality retrieves tickets accurately based on specified criteria.
10. User Access Management	Validate CRUD operations and dynamic search functionality.
10a. Create	Verify IT administrators can create user accounts accurately.
10b. View	Confirm IT administrators can view user accounts accurately.
10c. Update	Ensure IT administrators can update user account information accurately.
10d. Delete	Validate IT administrators can delete user accounts accurately.
10e. Dynamic Search	Confirm the dynamic search functionality retrieves user accounts accurately based on specified criteria.
11. Time Entry	Validate time tracking functionalities.
11a. Time In Function	Ensure employees can clock in accurately.
11b. Time Out Function	Verify employees can clock out accurately.
12. My Timesheet	Validate timesheet functionalities.
12a. View Own Timesheet	Confirm employees can view their own timesheet accurately.
12b. Search by Date	Ensure the search functionality retrieves timesheet records accurately based on specified dates.
13. Timesheet Manager	Validate timesheet management functionalities.
13a. Search by Employee ID	Ensure HR administrators can search timesheets accurately by employee ID.
13b. Search by Date	Confirm HR administrators can search timesheets accurately by date.
13c. View Employee Timesheet	Validate HR administrators can view employee timesheets accurately.
14. Leave Request	Validate leave request functionalities.
14a. View Own Leave Request	Ensure employees can view their own leave requests accurately.
14b. Submit Leave Request	Confirm employees can submit leave requests accurately.
15. Leave Manager	Validate leave management functionalities.
15a. Search by Employee ID	Ensure HR administrators can search leave requests accurately by employee ID.
15b. Search by Date	Confirm HR administrators can search leave requests accurately by date.
15c. Search by Status	Validate HR administrators can search leave requests accurately by status.
16. My Payslip	Validate payslip access and functionalities.
16a. Payslip Repository	Ensure employees can access the payslip repository accurately.
17. Payslip Generator	Validate payslip generation functionalities.
17a. Salary Calculation	Verify payroll administrators can generate payslips accurately with automated salary calculation.
17b. Deduction	Confirm payroll administrators can generate payslips accurately with automated deduction calculation.
17c. Withholding Tax	Ensure payroll administrators can generate payslips accurately with automated withholding tax calculation.
17d. Net Pay	Validate payroll administrators can generate payslips accurately with automated net pay calculation.



MotorPH OneSuite
Copyright © [2024] MotorPH. All Rights Reserved.
For Education Purposes Only.

