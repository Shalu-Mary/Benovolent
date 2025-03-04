document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const questionButtons = document.querySelectorAll('.question-btn');

    // Bot responses based on keywords
    const botResponses = {
        'donate': "Thank you for your interest in donating! You can make a donation through our website's donation page, or visit our office in person. Would you like information about our current campaigns?",
        'donation': "Thank you for your interest in donating! You can make a donation through our website's donation page, or visit our office in person. Would you like information about our current campaigns?",
        'volunteer': "We're always looking for volunteers! You can sign up through our website or contact our volunteer coordinator at volunteer@benevolentbeginnings.org. What skills would you like to contribute?",
        'program': "We offer several programs including: food distribution, animal rescue, family support services, educational workshops, and community development initiatives. Which one would you like to know more about?",
        'services': "Our services include emergency assistance, long-term support programs, animal welfare services, and community education. Is there a specific service you'd like to learn more about?",
        'animal': "Our animal welfare program rescues and rehabilitates abandoned animals, provides veterinary care, and helps find forever homes. We've rescued over 500 animals to date!",
        'food': "Our food program provides nutritious meals to families in need. We partner with local farmers and businesses to ensure quality and sustainability.",
        'family': "Our family support services include counseling, resource connection, emergency assistance, and educational programs to help families thrive.",
        'contact': "You can reach us at info@benevolentbeginnings.org or call us at (555) 123-4567. Our office is open Monday through Friday from 9am to 5pm.",
        'location': "Our main office is located at 123 Charity Lane, Helpville. We also have satellite locations throughout the region. Would you like specific directions?",
        'hours': "Our regular hours are Monday through Friday from 9am to 5pm. Some programs have extended hours on weekends.",
        'thanks': "You're very welcome! We're happy to help. Is there anything else you'd like to know?",
        'thank you': "You're very welcome! We're happy to help. Is there anything else you'd like to know?",
        'help': "I'm here to help! You can ask me about our programs, donation options, volunteer opportunities, or any other questions about Benevolent Beginnings.",
        'money': "Your financial contributions directly support our programs and services. We maintain full transparency with 85% of donations going directly to program costs and only 15% to administrative overhead.",
        'where do donations go': "Your donations directly fund our programs: 40% goes to family services, 30% to animal welfare, 20% to food distribution, and 10% to education initiatives. We're committed to transparency and publish annual financial reports."
    };

    // Add default questions
    const defaultResponses = {
        "How can I donate?": "You can donate through our website by clicking the 'Make a Donation' button on our homepage. We accept one-time and recurring donations via credit card, PayPal, or bank transfer. For large donations, please contact our development team directly.",
        "What programs do you offer?": "We offer several core programs: Family Support Services (emergency assistance, counseling, education), Animal Welfare (rescue, rehabilitation, adoption), Food Security (meal distribution, community gardens), and Community Development (neighborhood improvement projects, education initiatives).",
        "How can I volunteer?": "We welcome volunteers in many areas! You can help with animal care, food distribution, administrative tasks, event planning, or skilled services like legal or medical assistance. Visit our website's volunteer page to see current opportunities and fill out an application.",
        "Where do my donations go?": "Your donations directly fund our programs: 40% goes to family services, 30% to animal welfare, 20% to food distribution, and 10% to education initiatives. We're committed to transparency and publish annual financial reports."
    };

    // Additional information about website pages and features
    const websiteInfo = {
        'website': "Our website provides information about our mission, programs, ways to get involved, and impact stories. You can navigate using the menu at the top of the page.",
        'homepage': "Our homepage features our mission statement, highlights of our recent work, upcoming events, and quick links to our most popular resources.",
        'about': "Our About Us page shares our history, mission, values, and introduces our team and board members.",
        'login': "The login page allows registered volunteers, donors, and partners to access their accounts, track donations, sign up for volunteer shifts, and access specialized resources.",
        'stats': "Our Stats page showcases our impact through interactive charts and data visualizations, showing how we've helped the community over time.",
        'mission': "Our mission is to create positive change through compassionate service, community partnerships, and sustainable solutions to social challenges.",
        'vision': "Our vision is a world where every individual has access to the resources, opportunities, and support needed to thrive.",
        'event': "We host various events throughout the year including fundraisers, volunteer appreciation gatherings, community service days, and educational workshops.",
        'news': "Check our News section for the latest updates on our programs, success stories, and community impact.",
        'partner': "We partner with local businesses, government agencies, other nonprofits, and community groups to maximize our impact.",
        'history': "Benevolent Beginnings was founded in 2005 by a group of community members committed to addressing local needs through collaborative action.",
        'impact': "Last year, we served over 10,000 individuals, rescued 500+ animals, distributed 75,000 meals, and engaged 1,200 volunteers in our mission.",
        'privacy': "Our Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website and services.",
        'terms': "Our Terms of Service outline the rules and guidelines for using our website and participating in our programs.",
        'accessibility': "We're committed to making our website and services accessible to everyone, including people with disabilities."
    };

    // Send a message when clicking the send button
    sendButton.addEventListener('click', sendMessage);

    // Send a message when pressing Enter in the input field
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Add event listeners to quick question buttons
    questionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            userInput.value = question;
            sendMessage();
        });
    });

    // Function to send a user message
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;

        // Add user message to chat
        addMessage(message, 'user');
        userInput.value = '';

        // Show typing indicator
        showTypingIndicator();

        // Process response after a short delay to simulate thinking
        setTimeout(() => {
            // Remove typing indicator
            removeTypingIndicator();
            
            // Generate and add bot response
            const botResponse = getBotResponse(message);
            addMessage(botResponse, 'bot');
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }

    // Function to add a message to the chat
    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(sender + '-message');

        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('message-avatar');
        
        const avatarImg = document.createElement('img');
        if (sender === 'bot') {
            avatarImg.src = '../Assets/logo-removebg-preview.png';
            avatarImg.alt = 'Bot Avatar';
        } else {
            avatarImg.src = '';
            avatarImg.alt = 'User Avatar';
        }
        
        avatarDiv.appendChild(avatarImg);
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        
        const paragraph = document.createElement('p');
        paragraph.textContent = message;
        
        contentDiv.appendChild(paragraph);
        
        messageElement.appendChild(avatarDiv);
        messageElement.appendChild(contentDiv);
        
        chatMessages.appendChild(messageElement);
        
        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Improved function to get a bot response based on the user's message
    function getBotResponse(userMessage) {
        // Check for direct matches in default responses
        if (defaultResponses[userMessage]) {
            return defaultResponses[userMessage];
        }
        
        // Convert to lowercase for keyword matching
        const messageLower = userMessage.toLowerCase();
        
        // Initialize score tracking for intent matching
        let bestMatch = null;
        let highestScore = 0;
        
        // Combined keywords from both botResponses and websiteInfo
        const allKeywords = {...botResponses, ...websiteInfo};
        
        // Score each potential response based on keyword matches
        for (const keyword in allKeywords) {
            // Split keywords into individual words for better matching
            const keywordParts = keyword.toLowerCase().split(' ');
            let score = 0;
            
            // Calculate match score based on how many keywords appear in the message
            keywordParts.forEach(part => {
                if (messageLower.includes(part) && part.length > 2) {
                    score += part.length; // Longer word matches get higher scores
                }
            });
            
            // Check for direct phrase matches (higher priority)
            if (messageLower.includes(keyword.toLowerCase())) {
                score += 10; // Bonus for exact phrase match
            }
            
            // Update best match if this score is higher
            if (score > highestScore) {
                highestScore = score;
                bestMatch = keyword;
            }
        }
        
        // Question classification for better responses
        const isQuestion = messageLower.includes('?') || 
                           messageLower.includes('how') || 
                           messageLower.includes('what') || 
                           messageLower.includes('where') || 
                           messageLower.includes('when') || 
                           messageLower.includes('why') || 
                           messageLower.includes('who') || 
                           messageLower.includes('which') || 
                           messageLower.includes('can');
        
        // Return the best matching response if score is above threshold
        if (highestScore > 3) {
            // Determine which dictionary has the best match
            if (botResponses[bestMatch]) {
                return botResponses[bestMatch];
            } else if (websiteInfo[bestMatch]) {
                return websiteInfo[bestMatch];
            }
        }
        
        // Categorize general questions about the website
        if (isQuestion) {
            if (messageLower.includes('website') || messageLower.includes('page') || messageLower.includes('site')) {
                return "Our website is designed to make it easy for you to learn about our organization and get involved. You can find information about our programs, ways to donate, volunteer opportunities, impact statistics, and more through the navigation menu. Is there a specific section you're looking for?";
            }
        }
        
        // Default response if no keywords match
        return "Thank you for your question about Benevolent Beginnings. While I don't have specific information about that, I can help you with details about our programs, donation options, volunteer opportunities, website features, or our organization in general. Could you specify what you'd like to know?";
    }

    // Function to show typing indicator
    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message', 'bot-message');
        typingIndicator.id = 'typingIndicator';
        
        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('message-avatar');
        
        const avatarImg = document.createElement('img');
        avatarImg.src = '../Assets/logo-removebg-preview.png';
        avatarImg.alt = 'Bot Avatar';
        
        avatarDiv.appendChild(avatarImg);
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('typing-indicator');
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('span');
            typingDiv.appendChild(dot);
        }
        
        contentDiv.appendChild(typingDiv);
        
        typingIndicator.appendChild(avatarDiv);
        typingIndicator.appendChild(contentDiv);
        
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
});