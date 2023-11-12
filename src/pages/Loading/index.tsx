import React, { useState, useEffect, ReactNode} from "react";
import Loading from "../../components/Loading";

const WithLoading: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>; // Renderiza los componentes hijos una vez que la carga ha finalizado
};

export default WithLoading;
