import React from 'react';
import '/home/multi-sy-22/Desktop/FrontMind/LunarPot/frontend2/src/Component/page_sec.css';

function Page_sec() {
    return (
        <div className="container">
            <header className="header">
                <h1 className='head1'>MoleculeMind Connecting AI to Cure...</h1>
                <p>Developed by MoleculeMind.AI</p>
            </header>
            <main className="main-content">
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search for protein, gene, UniProt accession or organism or sequence search" 
                    />
                    <button>Search</button>
                </div>

                {/* <div className="boxes">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div> */}
                <p>Examples:</p>
                {/* <ul className="examples">
                    <li>MENFQKVEKIEGTGYVYVYKANRLTIGEVVALKKIRDLTETEGVPSIAIREIS</li>
                    <li>Free fatty acid receptor 2</li>
                    <li>At1g58602</li>
                    <li>Q5VSL9</li>
                    <li>E. coli</li>
                </ul> */}
                <p><a href="#">See search help</a> | <a href="#">Go to online course</a></p>
            </main>
            <footer className="footer">
                <p>MoleculeMind Connecting AI to Cure ........</p>
                <p><a href="#">See our updates – May 2024</a></p>
            </footer>
        </div>
    );
}

export default Page_sec;
