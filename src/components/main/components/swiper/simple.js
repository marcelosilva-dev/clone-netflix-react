import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 6,
    paritialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const images = [
  "https://occ-0-3471-1356.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVepLCtGXfoqX0Mwi0B3n-u6xzJKPT8yw-OLPrYYFuEE1qHBR10Bxhg5Hcteip9nP0b_ePigRPvmTj522DQpApDgiRI.webp?r=d8f",
  "https://occ-0-3471-1356.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe8rJ44ZFoX4rBOGDoz7L3yJBTFtom-hdHK5ylOVpgIzNO9e91Q1cLMuppDke69ji2fPC8CK6IZUHCDbrNFQ1rQ4Igw.webp?r=d51",
  "https://occ-0-3471-1356.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbcVzTEgRhB-7NL3J7Oj8Yk0g3ittysNCvle0aYlyukzSrlBzwXbAEIt9iWH0uXnDKm2iwSnoN3Wbg14ih8FCkssHb_WyalrpgRDzR1ypipG6pydLc7dskgLDxExURSNy71NlPezUiYAvHKITUafePv8J7I.webp?r=b8b",
  "https://occ-0-3471-1356.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS15rWgXyb8Ysmj9sCof2McHmP9Vfym6TMZ_LgsQDvMcXvI5WVgBPwKsGMovz2mlvrwxXmfzg5hXSmNRPU5zyJUnKTg.webp?r=adf",
  "https://occ-0-3471-1356.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQNr8vQ_eGFSkNHn2VP3quCcvl_zLsALGRk0E0jc32SuxQPe6DSkX_J95-abo6Uo1h5OhL5k-IsNmmJN2lJKD3BTwrvdYG05PHnTsidrG_wHPwrPFUfnt2ZizKAH.jpg?r=32a",
  "https://occ-0-3471-1356.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZdzvsmOjpnTM3_zkhS2HdZl-fwXX6VaEYTkLPP_VnsO2uXgzURy8UIXUYG_GbMhteLlAJGQzyPsUU5XPQ-pEX8k5AY.webp?r=358",
  "https://occ-0-3471-1356.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZS6kq71FFdr0RyLd_JjlDb8ukJqW6vZu0cZqzK61GW_4zZXpN4Dxvu_3bMrgo52fonrfds6tHPpSLdXnsZVs6LF9lU.webp?r=ced",
  "https://occ-0-3471-1356.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZhDgycx46KRfpO4VnnVueqIBRubaSAN8SiUNq_wDnzsUJSWQVxREcah03Lql2JVALNWZoL68ZAjiGYeZ0lrR8wCdV8.webp?r=9c5",
  "https://occ-0-3471-1356.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbvjX6IkGbAQMz8SssamxpoOQWUITzDeTQ4Q6RWxCTG3cGjYYD4Gdb_D1gD-jndZhzhT9zHU8KsHs0x65A93AOw7lh5hdcCHJmYBH1otcmXObccUeOm20dAXueMl.jpg?r=c22",
  "https://occ-0-3471-1356.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV4pGbX14-5bYlagUHaZvodO_C4DpiYyBHF3TET4hKVTRX4gyrG4BlsDyNYKQSewBnhNh54rjKcLrGa7ChH3DcoX-le2BcHIg3yGERxdRzwoSLNDHNDq8Fsxu9qH.jpg?r=7ee",
  "https://occ-0-3471-1356.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUjsKDiaKwLmrV662pwmVKEtRmbJI-s8M9ojCqr2QEdnPUJPX86RP-n9IGXxGcaHWkTf-cwz5e4kBLN3jYLM7HuBfYA.webp?r=01d",
  "https://occ-0-3471-1356.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTNgmTKvpCOW7jd_VwZaiBPuT6054wfPY_QJMeQT9c0tZDGDtI92xk5upfAScLEZeZVJ5uqenUBZzIAt9DlCdqrL1lM.jpg?r=422",
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType, text }) => {
  return (
    <div style={{ maxHeight: "100%", maxWidth: "100%" }}>
      <Carousel
        ssr
        partialVisible
        deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
        style={{ margin: 0, padding: 0 }}
      >
        {images.slice(0, 12).map((image) => {
          return (
            <Image
              draggable={false}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                margin: 0,
                padding: 0,
              }}
              src={image}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Simple;
