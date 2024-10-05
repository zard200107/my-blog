import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loader from "./Loader";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 模拟资源加载
    const loadResources = async () => {
      try {
        // 在这里加载资源
        await new Promise((resolve) => setTimeout(resolve, 3000)); // 模拟加载时间
        setIsFading(true);
        setTimeout(() => setIsLoading(false), 500); // 过渡时间
      } catch (error) {
        // 处理加载错误
        navigate("/404");
      }
    };

    loadResources();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className={`loader-wrapper ${isFading ? "fade-out" : ""}`}>
        <Loader />
      </div>
    );
  }

  return <div className="h-screen">{children}</div>;
};

export default ProtectedRoute;
