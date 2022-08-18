// Podemos alterar a implementação para nossa própria biblioteca de alertas, graças ao princípio SOLID de inversão de dependência.
const useAlert = () => {
  const dispatchSuccessAlert = (message: string) => {};

  const dispatchErrorAlert = (message: string) => {};

  return {
    dispatchSuccessAlert,
    dispatchErrorAlert,
  };
};

export default useAlert;
