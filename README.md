# Project README

## Overview

This project leverages Next.js, Contentful, and Tailwind CSS to build a dynamic web application. The main functionalities include fetching and displaying data from Contentful, implementing search functionality by categories, and formatting dates using Day.js.

## Technologies Used

- **Next.js:** A React framework for server-side rendering, static site generation, and building modern web applications.
- **Contentful:** A headless CMS used to manage and deliver content, providing a GraphQL API for fetching data.
- **Tailwind CSS:** A utility-first CSS framework for styling the application.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/your-username/your-repo.git](https://github.com/your-username/your-repo.git)
   cd your-repo
   ```

2. **Install dependencies:**

   ```bash
   npm install

   ```

3. **Set up environment variables:**

Create a .env.local 1 file in the root of your project and add 2 your Contentful credentials:
`bash
    CONTENTFUL_ACCESS_TOKEN=your_access_token
    CONTENTFUL_SPACE_ID=your_space_id
    `

4. **Run the development server:**
   ```bash
       npm run dev
   ```
5. **Open http://localhost:3000 with your browser to see the result**

### Implementation Details

**Data Fetching:**

We use the Contentful SDK to fetch data from Contentful. The getAirbnbListings function fetches entries of type airbnbLanding, and the getEntriesByCategory and getEntriesByRegion functions fetch entries based on specific fields.

**Date Formatting:**

We use Day.js to format dates. The DateRange component formats start and end dates to display a range like "Sep 5 - 7".
Challenges Faced

    -**UI Interpretation:** Initially, I spent too much time trying to reverse-engineer the UI instead of interpreting it and using my approach. This time could have been better spent properly architecting my Contentful entries.
    Contentful Usage: I struggled with importing JSON and using a GraphQL schema to format the needed data. Eventually, I used the Contentful SDK from npm, which provided a more straightforward approach.

Lessons Learned

    UI Rebuilding: I realized the importance of rebuilding landing pages with complex UIs that combine various inputs, such as date ranges, into a single search. This practice will help me better handle complex UI requirements in the future.
    Contentful Experience: I gained valuable experience working with Contentful, especially in structuring content entries and fetching data using their SDK.

Future Improvements

    Architecting Contentful Entries: Given more time, I would spend more effort on properly architecting my Contentful entries to ensure they are scalable and maintainable.
    Optimizing Search Functionality: I would optimize the search functionality to handle more complex queries and provide a better user experience.
    UI Enhancements: I would enhance the UI/UX by adding more interactive elements and improving the overall design consistency.

What I Am Proud Of

    Successfully integrating Contentful with Next.js and fetching dynamic content.
    Implementing a functional search by category feature.
    Learning and applying Day.js for date formatting.

Final Thoughts

This project was a valuable learning experience, highlighting the importance of proper planning and understanding of both UI and backend requirements. I look forward to applying these lessons to future projects.
