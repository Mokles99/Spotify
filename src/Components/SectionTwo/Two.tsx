import React from 'react';
import './two.css';

interface CardProps {
  title: string;
  subTitle: string[];
  features: string[];
  termsTitle: string;
  termsDescription: string;
}

const SpotifyCard: React.FC<CardProps & { index: number }> = ({
    title,
    subTitle,
    features,
    termsTitle,
    termsDescription,
    index,
  }) => (
    <div className="spotify-card">
      <div className="part-1">
  <div className="button-container"> 
    {index === 0 ? (
      <button className="transparent-btn-blue">One-time plans available</button>
    ) : (
      <>
        <button>1 Mounth free</button>
        <button className="transparent-btn-blue">One-time plans available</button>
      </>
    )}
  </div>
  <h2>{title}</h2>
  {subTitle.map((st, idx) => (
    <p key={idx}>{st}</p>
  ))}
</div>

      <hr />
      <div className="part-2">
        <ul>
          {features.map((feature, idx) => (
            <li key={idx}>✓ {feature}</li>
          ))}
        </ul>
        <button>Subscribe</button>
      </div>
      <hr />
      <div className="part-3">
        <p><u>{termsTitle}</u></p>
        <p>{termsDescription}</p>
      </div>
    </div>
  );
  

const spotifyCardsData = [
  {
    title: "Mini",
    subTitle: ["Ads included", "Play in shuffle"],
    features: ["Access to 70M songs", "Skip up to 6 times per hour"],
    termsTitle: "Terms and Conditions",
    termsDescription: "Basic access to Spotify's library. Upgrade anytime.",
  },
  {
    title: "Premium Individual",
    subTitle: ["Ad-free music", "Offline listening"],
    features: ["Unlimited skips", "Play any song", "High-quality audio"],
    termsTitle: "Terms and Conditions",
    termsDescription: "Enjoy a wide range of features with a Premium subscription.",
  },
  {
    title: "Premium Duo",
    subTitle: ["2 accounts", "Ad-free music"],
    features: ["Duo Mix: a playlist for two", "Unlimited skips", "Play any song", "High-quality audio"],
    termsTitle: "Terms and Conditions",
    termsDescription: "Designed for two people living at the same address.",
  },
  {
    title: "Premium Family",
    subTitle: ["Up to 6 accounts", "Ad-free music"],
    features: ["Family Mix: a playlist for the family", "Parental controls", "Unlimited skips", "Play any song", "High-quality audio"],
    termsTitle: "Terms and Conditions",
    termsDescription: "A plan for the whole family with individual accounts.",
  },
];

const Two: React.FC = () => {
    return (
      <section className="container" style={{backgroundColor:"hsl(0,0%,93%)"}}>
        <h1>Pick your Premium</h1>
        <p>Listen without limits on your phone, speaker, and other devices.</p>
        
        <div className="payment-icons">
          
          <span>💳</span> 
          <span>📱</span>
         
        </div>
  

        <div className="cards-container">
  {spotifyCardsData.map((cardData, index) => (
    <SpotifyCard 
      key={index}
      index={index} // Ajout de la propriété index ici
      title={cardData.title}
      subTitle={cardData.subTitle}
      features={cardData.features}
      termsTitle={cardData.termsTitle}
      termsDescription={cardData.termsDescription}
    />
  ))}
</div>

        <div className="discount-banner">
    <h1>Special discount for eligible students in university</h1>
    <button className="transparent-btn">Learn more</button>
</div>
      </section>
    );
  }
export default Two;  
