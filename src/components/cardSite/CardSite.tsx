import DOMPurify from 'dompurify';
import { RiEarthLine } from '@remixicon/react';
import { useNavigate } from 'react-router-dom';
import {
  CardSiteWrapper,
  HeaderText, LearnMoreLink,
  SmallText,
  SmallTextBold,
  TextLayer,
} from "@/components/cardSite/CardSite.styles.ts";


const CardSite = ( props: ICardSite) => {
    const { id, name, description, category, country, region } = props;
    const navigate = useNavigate();

    const learnMoreClick = () => {
      navigate(`/site/${id}`, { replace: true });
    }
    return (
        <CardSiteWrapper className={`cardSite`}>
            <SmallTextBold>{category}</SmallTextBold>
            <HeaderText>{name}</HeaderText>
            <SmallText><RiEarthLine size={16}/>&nbsp;{country} / {region}</SmallText>
            <TextLayer dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(description)}}/>
            <LearnMoreLink onClick={learnMoreClick}>Learn More</LearnMoreLink>
        </CardSiteWrapper>
    )
}

export default CardSite;