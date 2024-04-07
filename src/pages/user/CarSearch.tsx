import CarFilter from "../../components/ui/CarFilter";

import { selectLoading, setIsLoading } from "../../redux/slices/loadingSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useEffect } from "react";

export default function CarSearch() {
  const isLoading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    if (localStorage.getItem("carFilters")) {
      localStorage.removeItem("carFilters");
    }

    dispatch(setIsLoading(false));
  });

  return (
    <>
      <div className="py-32 lg:py-3"></div>
      <div className="mx-5 lg:mx-20 xl:mx-32 absolute -top-28 sm:-top-32 right-0 left-0 z-20">
        {!isLoading && <CarFilter variant="submit" />}
      </div>
    </>
  );
}
