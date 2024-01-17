import React from 'react'
import Navbar from '../../navbar/Navbar.js' 
import Footer from '../../footer/Footer.js'


function IntroductionPage() {
    return (
        <>
        <div>
            <Navbar />
            <h1>what is hiv?</h1>
            <p>HIV stands for human immunodeficiency virus. It weakens a person’s immune system by destroying important cells that fight disease and infection. There is currently no effective cure for HIV. However, with proper medical care, HIV can be controlled. Source: CDC</p>
            <p>When HIV is not treated, it can lead to AIDS (acquired immunodeficiency syndrome).</p>
            <p>There is currently no effective cure. Once people get HIV, they have it for life.</p>
            <p>As a result, without access to more safe and economical treatment options, vulnerable groups of individuals must deal with the effects of limited availability of HIV treatments.</p>
        </div>

        <div>
            <h1>where does hiv come from?</h1>
            <p>There are two strains of HIV: HIV-1 (derived from chimpanzees) and HIV-2 (derived from Sooty Mangabey monkeys). HIV-1 is highly transmissible globally.</p>
        </div>    

        <div>
            <h1>how it works</h1>
            <p>When the HIV virus enters the body, it enters a type of white blood cell called CD4</p>
            <p>CD4 cells help fight infection by triggering your immune system to destroy viruses, bacteria, and other germs that may make you sick.</p>
        </div>

        <div>
            <h1>how do I know if I get hiv?</h1>
            <p>The only way to know if you have HIV is to get tested.</p>
            <p>Knowing your HIV status helps you make healthy decisions to prevent getting or transmitting HIV.</p>
        </div>

        <div>
            <h1>the 3 stages of hiv</h1>
            <h2>Stage 1: Acute HIV Infection</h2>
            <p>People have a large amount of HIV in their blood and are very contagious.</p>
            <p>Many people have flu-like symptoms.</p>
            <h2>Stage 2: Chronic HIV Infection</h2>
            <p>This stage is also called asymptomatic HIV infection or clinical latency.</p>
            <p>HIV is still active and continues to reproduce in the body.</p>
            <p>People may not have any symptoms or get sick during this phase but can transmit HIV.</p>
            <p>People who take HIV treatment as prescribed may never move into Stage 3 (AIDS).</p>
            <p>Without HIV treatment, this stage may last a decade or longer or may progress faster. At the end of this stage, the amount of HIV in the blood (viral load) goes up and the person may move into Stage 3 (AIDS).</p>
            <h2>Stage 3: Acquired Immunodeficiency Syndrome (AIDS)</h2>
            <p>The most severe stage of HIV infection.</p>
            <p>People with AIDS can have a high viral load and may easily transmit HIV to others.</p>
            <p>People with AIDS have badly damaged immune systems. They can get an increasing number of opportunistic infections (illnesses that occur more frequently and are more severe in people with HIV because they have damaged immune systems) or other serious illnesses.</p>
            <p>Without HIV treatment, people with AIDS typically survive about three years.</p>
        </div>

        <div>
            <h1>list of resources</h1>
            <p>CDC: HIV Basics. Link to resources: https://www.cdc.gov/hiv/basics/index.html</p>
            <p>MedlinePlus: CD4 Lymphocyte Count. Link to resources: https://medlineplus.gov/lab-tests/cd4-lymphocyte-count/#:~:text=CD4%20cells%20are%20a%20type,that%20may%20make%20you%20sick.</p>
            <p>Vinmec: Origin and how the HIV virus enters the body. Link to resources: https://www.vinmec.com/en/news/health-news/general-health-check/origin-and-how-the-hiv-virus-enters-the-body/</p>
        </div>

        <Footer />
        </>
    );
}

/* Making IntroductionPage as the default export of this module */
export default IntroductionPage;