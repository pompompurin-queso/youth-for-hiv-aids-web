import React from 'react'
import Navbar from '../../navbar/Navbar.js' 
import Footer from '../../footer/Footer.js'
import hivproteaseImage from './hiv-protease.jpg'
import './DataSciencePage.css';


function DataPage() {
    return (
        <>
        <div>
            <Navbar />
            <h1>project (ongoing): hiv-1 protease cleavage prediction</h1>
            <img src={hivproteaseImage} alt="hivproteaseImage" className="hivproteaseImage" />
            <h2>Technical Information</h2>
            <p>Dataset: HIV-1 protease cleavage on UC Irvine Machine Learning Repository. (Rögnvaldsson,Thorsteinn. (2015). HIV-1 protease cleavage. UCI Machine Learning Repository. https://doi.org/10.24432/C5H03P)</p>
            <p>The dataset contains sequences of amino acids (octamers) and corresponding labels indicating whether the HIV-1 protease will cleave at the central position of the sequence (+1 if yes, -1 if no).</p>
            <p>Variable information: </p>
            <ul>
                <li>Each attribute is a letter denoting an amino acid. G (Glycine, Gly); P (Proline, Pro); A (Alanine, Ala); V (Valine, Val); L (Leucine, Leu); I (Isoleucine, Ile); M (Methionine, Met); C (Cysteine, Cys); F (Phenylalanine, Phe); Y (Tyrosine, Tyr); W (Tryptophan, Trp); H (Histidine, His); K (Lysine, Lys); R (Arginine, Arg); Q (Glutamine, Gln); N (Asparagine, Asn); E (Glutamic Acid, Glu); D (Aspartic Acid, Asp); S (Serine, Ser); T (Threonine, Thr). </li>
                <li>The output denotes cleaved (+1) or not cleaved (-1).</li>
            </ul>
        </div>

        <div>
            <h1>introduction to biology concepts</h1>

            <h2>1. HIV-1 Protease Cleavage</h2>
            <p>Imagine you have a key player in a game – let's call it the HIV-1 protease. This player has a unique role: it's like a molecular scissors within the human immunodeficiency virus (HIV), a virus known for causing AIDS.</p>
            <p>In the world of HIV, this molecular scissors (protease) has a job to cut specific protein chains at precise locations. This cutting process is what we refer to as "cleavage." Think of it as the protease deciding where to cut a long rope into smaller pieces.</p>

            <h2>2. Amino Acids</h2>
            <p>To understand cleavage, let's introduce the building blocks of proteins – amino acids. Imagine amino acids as different letters of the alphabet. Proteins are like words made up of these letters.</p>
            <p>In our case, we have an 8-letter "word" known as an octamer, representing a sequence of amino acids. Each letter (amino acid) has its unique properties. The HIV-1 protease examines this sequence and decides where to make its cuts, much like a chef selecting ingredients for a recipe.</p>
            
            <h2>3. Protein Cleavage</h2>
            <p>Now, let's dive into protein cleavage. Picture a protein as a long, intricate necklace made of beads (amino acids). The HIV-1 protease's job is to strategically cut this necklace at specific points.</p>
            <p>When the protease cleaves a protein, it's like breaking the necklace into smaller pieces. Each piece may have a unique function or role within the virus's plan. This cleavage is crucial for the virus's survival and reproduction, turning raw protein materials into functional components it needs.</p>

            <h2>Key Takeaways:</h2>
            <ul>
                <li>HIV-1 Protease: A molecular scissors within the HIV virus that strategically cuts proteins.</li>
                <li>Amino Acids: Building blocks of proteins, like letters in a word, with each amino acid having unique characteristics.</li>
                <li>Protein Cleavage: The process of cutting a protein into smaller pieces, performed by the HIV-1 protease to facilitate the virus's lifecycle.</li>
            </ul>
        </div>

        <div>
            <h1>problem statement</h1>
            <p>In our exploration, we aim to use machine learning to predict where these cleavage sites might be, offering insights into the virus's behavior. It's a fascinating intersection of biology and data science!</p>
            <p>The project aims to develop a data analysis and machine-learning model for predicting HIV-1 protease cleavage sites within protein sequences. </p>
            <p>Understanding the cleavage patterns of the HIV-1 protease is crucial in the context of HIV biology. The cleavage is a natural and essential step in the maturation of the virus, influencing its ability to replicate and spread within the host (the human body).</p>
            <p>The predictive model will contribute to our understanding of the biological processes involved and may have implications for drug discovery and therapeutic interventions targeting the HIV virus.</p>
        </div>

        <Footer />
        </>
    )
}

export default DataPage;