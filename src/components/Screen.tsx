type ScreenProps = {
  result: number | null;
};

export const Screen = ({ result }: ScreenProps) => {
  return (
    <div className="w-full m-3 p-1 bg-white rounded-md border-solid border-2 border-[#dfe3e8] text-center">
      {result !== null ? result.toFixed(2) : "00.00"}
    </div>
  );
};
