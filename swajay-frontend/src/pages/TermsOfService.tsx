import PageHero from "../components/PageHero";

const TermsOfService = () => {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Terms of Service"
                subtitle="Please read these terms carefully before using our services."
                label="Legal"
            />
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 prose prose-lg prose-blue">
                <p>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <h3>1. Agreement to Terms</h3>
                <p>
                    These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Swajay Solutions ("we," "us," or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                </p>

                <h3>2. Intellectual Property Rights</h3>
                <p>
                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                </p>

                <h3>3. User Representations</h3>
                <p>
                    By using the Site, you represent and warrant that:
                </p>
                <ul>
                    <li>All registration information you submit will be true, accurate, current, and complete.</li>
                    <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                    <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                    <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                </ul>

                <h3>4. Prohibited Activities</h3>
                <p>
                    You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                </p>

                <h3>5. Contact Us</h3>
                <p>
                    In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                </p>
                <p>
                    <strong>Swajay Solutions</strong><br />
                    19 Holly Cove Ln,<br />
                    Dover, DE 19901<br />
                    United States<br />
                    Email: info@swajaysolutions.com
                </p>
            </div>
        </div>
    );
};

export default TermsOfService;
