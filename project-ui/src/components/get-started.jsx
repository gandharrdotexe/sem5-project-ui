import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Stars from '../assets/stars.png';
import LogoIcon from '../assets/logo.svg';
import { seoAnalyze } from '../api/seoAnalyze';
import { aiSuggestion } from '../api/aiSuggestion';
import  SEODataTable  from './SEODataTable';

const Get_Started = () => {
  const [data, setData] = useState(null);  // Store SEO data here
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [aiData, setaiData] = useState(null);

  // Function to call the SEO analysis API
  const analyze = async () => {
    setLoading(true);  // Set loading state to true while fetching
    setError(null);    // Reset error state
    try {
      const result = await seoAnalyze(url);  // Wait for the API call to complete
      setData(result);   // Set the result in state
      console.log(result);
    } catch (error) {
      console.error("Error during SEO analysis:", error);
      setError("Failed to fetch SEO data");
    } finally {
      setLoading(false); // Stop loading when the process completes
    }
  };

  // Handle the input change
  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const Suggestions = async() =>
  {
    let aidata = {
      "metaDescription": data.metaDescription,
      "keywords": data.keywords,
      "keywordsInTitleAndDescription": data.keywordsInTitleAndDescription,
      "seoTitle": data.seoTitle
    }
    setLoading(true);  // Set loading state to true while fetching
    setError(null);    // Reset error state
    try {
      const sugg = await aiSuggestion(aidata);  // Wait for the API call to complete
      setaiData(sugg);  // Set the result in state
      console.log(sugg);
    } catch (error) {
      console.error("Error getting ai suggestion", error);
      setError("Failed to fetch AI data");
    } finally {
      setLoading(false); // Stop loading when the process completes
    }
    
    
  }

  return (
    <div>
      <Navbar />
      <section
        className={`flex justify-center items-center relative -mt-[100px] transition-all duration-500 ${
          data ? 'h-auto' : 'h-[492px] md:h-[800px]'
        }`}
        style={{
          backgroundImage: `url(${Stars})`,
          
        }}
      >
        <div className="container">
          <div className='flex items-center justify-center gap-2 mt-[115px]'>
            
              <input
                type="text"
                className='py-2 px-3 w-[50%] border border-white/40 caret-[#9867C5]'
                onChange={handleChange}
                placeholder="Enter URL"
              />
              <button
                className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a2058] shadow-[0_0_12px_#8c45ff] flex items-center space-x-2'
                onClick={analyze}
              >
                <div className='absolute inset-0'>
                  <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]'></div>
                  <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top, black, transparent)]'></div>
                  <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,60,255,.7)_inset] rounded-lg'></div>
                </div>
                <span>Analyze</span>
                <img src={LogoIcon} alt="Logo" className='h-4 w-4 invert' />
              </button>
            
            
          </div>

          {/* Display the loading, error, or SEO analysis result */}
          <div className='mt-4 text-white'>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && (
  <>
    <div className='my-11'>
      <SEODataTable seoData={data} />  {/* Passing the fetched data to the Table component */}
      <button
                    className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a2058] shadow-[0_0_12px_#8c45ff] flex items-center space-x-2'
                    onClick={Suggestions}
      >
        <div className='absolute inset-0'>
          <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]'></div>
          <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top, black, transparent)]'></div>
          <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,60,255,.7)_inset] rounded-lg'></div>
        </div>
        <span>Get Ai Suggestions</span>
        <img src={LogoIcon} alt="Logo" className='h-4 w-4 invert'  />
      </button>
    </div>
  </>
)}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Get_Started;
