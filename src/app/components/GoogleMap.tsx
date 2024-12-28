'use client'

import React, { useEffect, useRef } from "react";

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Google Maps を読み込むスクリプトを追加
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.onload = () => {
      // 地図を初期化
      const map = new google.maps.Map(mapRef.current!, {
        center: { lat: 35.6895, lng: 139.6917 }, // 東京の緯度経度
        zoom: 12,
      });

      // マーカーを追加する
      const marker = new google.maps.Marker({
        position: { lat: 35.6895, lng: 139.6917 },
        map,
        title: "Tokyo",
      });
      
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "500px" }}
    />
  );
};

export default GoogleMap;
