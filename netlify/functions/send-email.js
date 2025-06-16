const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const { firstName, lastName, email } = JSON.parse(event.body);

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ message: 'All fields are required' }),
      };
    }

    // Create transporter (you'll need to set these environment variables in Netlify)
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER, // Your Gmail address
        pass: process.env.SMTP_PASS, // Your Gmail App Password
      },
    });

    const fullName = `${firstName} ${lastName}`;
    
    const emailContent = `Subject: Imiel for Senior Design Engineer, Already Building the Future of Web Dev

Hi Eric Simons,

I'm reaching out to introduce someone who's already pushing the boundaries of web development in ways that deeply align with StackBlitz's mission: Imiel.

Imiel is a rare breed of engineer-designer hybrid with a deep understanding of front-end architecture, UX design, and the real-world pain points developers face, especially in browser-based dev environments like Bolt.new. Without any official access to the codebase, he's already done what many full teams haven't:

Created a popular extension that improves core UX:
• Manual sidebar toggle to eliminate distracting UI behavior
• Auto-generated task prompts for faster iteration
• Smart analysis and rewriting of the bolt.ignore file based on project contents
• A cleaner, more accessible PRD generator for real-world workflows

Founded bolt.army to connect and empower devs building around Bolt, essentially creating an organic developer community from the ground up.

He's already designing, engineering, and shipping the kind of user-centric improvements StackBlitz values, from the outside. With access to the actual platform and a team to collaborate with, he'd be an unstoppable force.

Imiel lives and breathes this work. He obsesses over interface clarity, performance, accessibility, and dev experience. He's a natural bridge between design and code, and already leads by example in the open dev community.

He's not just ready for a role like this; he's already doing it.

If you'd like to connect with him directly, I'm happy to facilitate an introduction. This is one of those hires that could quietly level up the entire platform.

Best,
${fullName}

---
Sent via BoltNeedsImiel.com
Contact: ${email}`;

    const mailOptions = {
      from: `"${fullName}" <${process.env.SMTP_USER}>`,
      to: 'eric@stackblitz.com', // Eric Simons' email
      subject: 'Imiel for Senior Design Engineer, Already Building the Future of Web Dev',
      text: emailContent,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        message: 'Email sent successfully!',
        details: `Email sent from ${fullName} (${email}) to Bolt team`
      }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        message: 'Failed to send email. Please try again later.',
        error: error.toString()
      }),
    };
  }
};