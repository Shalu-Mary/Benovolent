/**
 * Popup Component for Privacy Policy and Terms of Service
 * For Benevolent Beginnings website
 */

class PolicyPopup {
    constructor() {
      this.initialized = false;
      this.popupOverlay = null;
      this.popupClose = null;
      this.popupTitle = null;
      this.privacyPolicyContent = null;
      this.termsServiceContent = null;
      
      // Initialize when the DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.init());
      } else {
        this.init();
      }
    }
    
    init() {
      if (this.initialized) return;
      
      // Inject the template directly into the page
      this.injectTemplate();
      
      // Get the popup elements
      this.popupOverlay = document.getElementById('popup-overlay');
      this.popupClose = document.getElementById('popup-close');
      this.popupTitle = document.getElementById('popup-title');
      this.privacyPolicyContent = document.getElementById('privacy-policy-content');
      this.termsServiceContent = document.getElementById('terms-service-content');
      
      // Get the footer links (assuming they have specific hrefs)
      const privacyPolicyLinks = document.querySelectorAll('a[href="#privacy"]');
      const termsServiceLinks = document.querySelectorAll('a[href="#terms"]');
      
      // Add event listeners to all privacy policy links
      privacyPolicyLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          this.openPopup('privacy');
        });
      });
      
      // Add event listeners to all terms of service links
      termsServiceLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          this.openPopup('terms');
        });
      });
      
      // Handle footer links that might not have specific hrefs
      // This is a fallback for your current site structure
      const footerLinks = document.querySelectorAll('footer a');
      footerLinks.forEach(link => {
        const linkText = link.textContent.toLowerCase();
        
        if (linkText.includes('privacy') && !link.hasAttribute('data-popup-initialized')) {
          link.setAttribute('data-popup-initialized', 'true');
          link.addEventListener('click', (e) => {
            e.preventDefault();
            this.openPopup('privacy');
          });
        }
        
        if (linkText.includes('terms') && !link.hasAttribute('data-popup-initialized')) {
          link.setAttribute('data-popup-initialized', 'true');
          link.addEventListener('click', (e) => {
            e.preventDefault();
            this.openPopup('terms');
          });
        }
      });
      
      // Event listener for the close button
      this.popupClose.addEventListener('click', () => this.closePopup());
      
      // Event listener to close popup when clicking outside of it
      this.popupOverlay.addEventListener('click', (e) => {
        if (e.target === this.popupOverlay) {
          this.closePopup();
        }
      });
      
      // Event listener to close popup when pressing Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closePopup();
        }
      });
      
      this.initialized = true;
    }
    
    injectTemplate() {
      // HTML template for the popup - embedded directly in JavaScript
      const popupHTML = `
      <div id="popup-overlay" class="popup-overlay">
        <div class="popup-container">
          <div class="popup-header">
            <h2 id="popup-title">Privacy Policy</h2>
            <button id="popup-close" class="popup-close">&times;</button>
          </div>
          <div class="popup-content">
            <div id="privacy-policy-content" class="policy-content">
              <h3>Privacy Policy</h3>
              <p>Last updated: February 28, 2025</p>
              
              <h4>1. Introduction</h4>
              <p>Welcome to Benevolent Beginnings. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
              
              <h4>2. The Data We Collect About You</h4>
              <p>Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul>
                <li>Identity Data: includes first name, last name, username or similar identifier</li>
                <li>Contact Data: includes email address and telephone numbers</li>
                <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform</li>
                <li>Usage Data: includes information about how you use our website and services</li>
              </ul>
              
              <h4>3. How We Use Your Personal Data</h4>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul>
                <li>Where we need to perform the contract we are about to enter into or have entered into with you</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests</li>
                <li>Where we need to comply with a legal or regulatory obligation</li>
              </ul>
              
              <h4>4. Data Security</h4>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
              
              <h4>5. Contact Us</h4>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: privacy@benevolentbeginnings.org</p>
            </div>
            
            <div id="terms-service-content" class="policy-content">
              <h3>Terms of Service</h3>
              <p>Last updated: February 28, 2025</p>
              
              <h4>1. Agreement to Terms</h4>
              <p>By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
              
              <h4>2. Use License</h4>
              <p>Permission is granted to temporarily download one copy of the materials on Benevolent Beginnings' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on Benevolent Beginnings' website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              
              <h4>3. Disclaimer</h4>
              <p>The materials on Benevolent Beginnings' website are provided on an 'as is' basis. Benevolent Beginnings makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              
              <h4>4. Limitations</h4>
              <p>In no event shall Benevolent Beginnings or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Benevolent Beginnings' website, even if Benevolent Beginnings or a Benevolent Beginnings authorized representative has been notified orally or in writing of the possibility of such damage.</p>
              
              <h4>5. Governing Law</h4>
              <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            </div>
          </div>
        </div>
      </div>
      `;
      
      // Check if the popup already exists
      if (!document.getElementById('popup-overlay')) {
        // Create a container for the popup
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = popupHTML;
        
        // Append the popup to the body
        document.body.appendChild(tempContainer.firstElementChild);
      }
    }
    
    openPopup(type) {
      // Show the overlay
      this.popupOverlay.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Disable scrolling on the main page
      
      // Hide both content sections first
      this.privacyPolicyContent.style.display = 'none';
      this.termsServiceContent.style.display = 'none';
      
      // Display the appropriate content based on type
      if (type === 'privacy') {
        this.popupTitle.textContent = 'Privacy Policy';
        this.privacyPolicyContent.style.display = 'block';
      } else if (type === 'terms') {
        this.popupTitle.textContent = 'Terms of Service';
        this.termsServiceContent.style.display = 'block';
      }
    }
    
    closePopup() {
      this.popupOverlay.style.display = 'none';
      document.body.style.overflow = ''; // Enable scrolling on the main page
    }
  }
  
  // Create a new instance of the PolicyPopup
  const policyPopup = new PolicyPopup();