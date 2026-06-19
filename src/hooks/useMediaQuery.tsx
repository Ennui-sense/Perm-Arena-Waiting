import { useEffect, useState } from "react"
import type { MediaQuery } from "~/types";

const MEDIA_QUERY_WIDTHS: Record<MediaQuery, string> = {
  "mobile-s": "30rem",
  mobile: "48rem",
  tablet: "64rem",
  desktop: "90rem",
}

const useMediaQuery = (media: MediaQuery) => {
  const [matches, setMatches] = useState<boolean>(false);
  const width = MEDIA_QUERY_WIDTHS[media];

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${width})`)

    const handleChange = () => {
      setMatches(mediaQuery.matches);
    }

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [width])

  return matches
}

export default useMediaQuery
