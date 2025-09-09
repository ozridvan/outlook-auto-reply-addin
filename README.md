# Outlook Auto Reply Add-in

## Overview
The Outlook Auto Reply Add-in is designed to enhance the automatic reply functionality in Outlook by providing users with predefined message templates for both internal and external replies. This add-in simplifies the process of setting up automatic replies, allowing users to apply templates with a single click.

## Features
- Predefined message templates for internal and external replies.
- User-friendly task pane interface.
- One-click application of selected templates.
- Compatible with both Outlook desktop and web clients.

## Project Structure
```
outlook-auto-reply-addin
├── src
│   ├── taskpane.html
│   ├── taskpane.js
│   └── assets
│       └── style.css
├── manifest.xml
└── README.md
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the project in your preferred code editor.
3. Ensure you have the necessary permissions to deploy add-ins in your Microsoft 365 environment.
4. Upload the `manifest.xml` file to the Microsoft 365 Admin Center for centralized deployment.

## Usage Guidelines
1. Open Outlook and navigate to the automatic replies settings.
2. The task pane will automatically suggest predefined templates.
3. Select the desired template and click the "Apply" button to set it as your automatic reply.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.