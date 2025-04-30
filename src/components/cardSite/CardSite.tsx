import DOMPurify from "dompurify";
import { RiEarthLine, RiStarFill, RiStarLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import {
  CardSiteWrapper,
  HeaderText,
  LearnMoreLink,
  SmallText,
  SmallTextBold,
  TextLayer,
  AddToFavs,
} from "@/components/cardSite/CardSite.styles.ts";
import { useFavoriteSitesContext } from "@/context/FavoriteSitesContext.tsx";

const CardSite = (props: ICardSite) => {
  const { id, name, description, category, country, region } = props;
  const { addFavorite, isFavorite, removeFavorite } = useFavoriteSitesContext();
  const navigate = useNavigate();

  const learnMoreClick = () => {
    navigate(`/site/${id}`, { replace: true });
  };
  return (
    <CardSiteWrapper className={`cardSite`}>
      <AddToFavs>
        { isFavorite(id.toString()) ? <RiStarFill size={16} onClick={() => removeFavorite(id.toString())}/> : <RiStarLine size={16} onClick={() => addFavorite(id.toString())}/>}

      </AddToFavs>
      <SmallTextBold>{category}</SmallTextBold>
      <HeaderText>{name}</HeaderText>
      <SmallText>
        <RiEarthLine size={16} />
        &nbsp;{country} / {region}
      </SmallText>
      <TextLayer dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} />
      <LearnMoreLink onClick={learnMoreClick}>Learn More</LearnMoreLink>
    </CardSiteWrapper>
  );
};

export default CardSite;
