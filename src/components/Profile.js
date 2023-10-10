import React, { Component } from 'react'
import Navbar from '../pages/Navbar'
import Body_Profile from '../pages/Body_Profile'
import { useState, useEffect } from 'react';
import Skeleton_Profile from '../pages/Skeleton_Profile';
import Loading_profiles from '../pages/Loading_profiles';
import Skeleton_Loading from '../pages/Skeleton_Loading';

function Profile() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const translate = document.getElementById("translate_icon");
  const moon = document.getElementById("moon");
  const sun = document.getElementById("sun");

  useEffect(() => {
    // Simuler une requête asynchrone (remplacez ceci par votre appel API réel)
    setTimeout(() => {
      // Une fois les données chargées, masquez la page de chargement
      setLoading(false);
      // Mettez à jour l'état avec les données reçues
      setData(); // Remplacez "mockData" par les données réelles
    }, 900); // Temps de délai simulé de 2 secondes
  }, []);
  if (loading) {
    translate.style.opacity = "0";
    moon.style.opacity = "0";
    sun.style.opacity = "0";
    return <Skeleton_Loading />
  }
  else {
    translate.style.opacity = "1";
    moon.style.opacity = "1";
    sun.style.opacity = "1";
  }
    return (
      <> 
       {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      <div>
        <Navbar />
        <Body_Profile />
      </div>
      </>
    )
}

export default Profile
