import PageHero from "../components/PageHero";

const PrivacyPolicy = () => {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Privacy Policy"
                subtitle="Your privacy is important to us. This policy outlines how we handle your personal information."
                label="Legal"
            />
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 prose prose-lg prose-blue">
                <p>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <h3>1. Introduction</h3>
                <p>
                    Swajay Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>

                <h3>2. Information We Collect</h3>
                <p>
                    We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                </p>
                <ul>
                    <li>
                        <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
                    </li>
                    <li>
                        <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                    </li>
                </ul>

                <h3>3. Use of Your Information</h3>
                <p>
                    Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                </p>
                <ul>
                    <li>Create and manage your account.</li>
                    <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
                    <li>Email you regarding your account or order.</li>
                    <li>Enable user-to-user communications.</li>
                </ul>

                <h3>4. Disclosure of Your Information</h3>
                <p>
                    We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                </p>
                <ul>
                    <li>
                        <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                    </li>
                </ul>

                <h3>5. Contact Us</h3>
                <p>
                    If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <p>
                    <strong>Swajay Solutions</strong><br />
                    19 Holly Cove Ln,<br />
                    Dover, DE 19901<br />
                    United States<br />
                    Email: support@swajaysolutions.com
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
