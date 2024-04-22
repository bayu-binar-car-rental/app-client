import CarFilter from "../../components/ui/CarFilter";

import { selectLoading, setIsLoading } from "../../states/slices/loadingSlice";
import { useAppSelector, useAppDispatch } from "../../states/hooks";
import { useEffect } from "react";
import Canvas from "../../components/ui/Canvas";

export default function CarSearchPage() {
  const isLoading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    if (localStorage.getItem("carFilters")) {
      localStorage.removeItem("carFilters");
    }

    dispatch(setIsLoading(false));
  }, []);

  return (
    <>
      <Canvas />
      <div className="py-32 lg:py-3" />
      <div className="mx-5 lg:mx-20 xl:mx-40 absolute -top-28 sm:-top-[8.5rem] right-0 left-0 z-30">
        {!isLoading && (
          <>
            <CarFilter variant="submit" />
          </>
        )}
      </div>
    </>
  );
}
