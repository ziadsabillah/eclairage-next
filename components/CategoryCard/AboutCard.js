import styled from 'styled-components'


const GalleryImage = styled.div`
     position: relative;
     z-index: 1;
     margin-bottom: 4%;
     overflow: hidden;
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
`;

const GalleryItem = styled.div`
    width: 100%;
    padding: 0 !important;
    line-height: 1.7 !important;
    list-style: none !important;

    img {
        width: 100%;
        height: auto;
        vertical-align: baseline;
        font-size: 100%;
    }
`;

const GalleryText = styled.div`
    background-color: #000;
    padding-top: 4px !important;
    margin-top: -80px !important;
    margin-right: 18px !important;
    margin-left: 18px !important;
    z-index: 400;
    position: relative;
    text-align: left;
`;

const GalleryTextInner = styled.div`
    margin: 0 50px 0 30px;
    padding-bottom: 0;
    position: relative;
    color: #FFF !important;

    h2 {
        font-size: 25px;
        line-height: 30px;
        margin-top: 34px;
        padding-bottom: 10px;
        font-weight: 500;
    }
    p {
        font-weight: 400;
        padding-bottom: 1em;
    }
`;





const AboutCard = ({ title, imgUrl, description }) => {
    return (
        <>
            <GalleryImage>
                <GalleryItem>
                    <img src={imgUrl} />
                </GalleryItem>
            </GalleryImage>
            <GalleryText>
                <GalleryTextInner>
                    <h2>{title}</h2>
                    <p>
                        <img src="/icons/linea-txt.png" alt="Seperator" />
                    </p>
                    <p>
                        {description}
                    </p>
                </GalleryTextInner>
            </GalleryText>

        </>
    )
}

export default AboutCard;