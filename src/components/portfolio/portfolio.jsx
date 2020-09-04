import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
/* import Preview1 from "../../assets/portfolio/project01/audi.png";
import Preview2 from "../../assets/portfolio/project02/barra-sul.png";
import Preview3 from "../../assets/portfolio/project03/bigode-negro.png";
import Preview4 from "../../assets/portfolio/project04/erica-lopes.png";
import Preview5 from "../../assets/portfolio/project05/erika-e-jair.png";
import Preview6 from "../../assets/portfolio/project06/grupo-level.png";
import Preview7 from "../../assets/portfolio/project07/rodinaldos.png"; */
//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: `https://img.youtube.com/vi/${getYouTubeId("https://www.youtube.com/watch?v=4bZeJ4A3u5s")}/hqdefault.jpg`,
          title: "AUDI R8 | JR Estética do Carro",
          tag: "CATEGORIA 1",
          url: "https://www.youtube.com/watch?v=4bZeJ4A3u5s"
        },
        {
          id: "2",
          preview: `https://img.youtube.com/vi/${getYouTubeId("https://www.youtube.com/watch?v=IAUnorHCsP8")}/hqdefault.jpg`,
          title: "Cantu Pneus - Grupo Level - RB Filmes",
          tag: "CATEGORIA 1",
          url: "https://www.youtube.com/watch?v=IAUnorHCsP8"
        },
        {
          id: "3",
          preview: `https://img.youtube.com/vi/${getYouTubeId("https://www.youtube.com/watch?v=gBt1INWboco")}/hqdefault.jpg`,
          title: "Erica Lopes - Vestidos",
          tag: "CATEGORIA 3",
          url: "https://www.youtube.com/watch?v=gBt1INWboco"
        },
        {
          id: "4",
          preview: `https://img.youtube.com/vi/${getYouTubeId("https://www.youtube.com/watch?v=Wa18W--vO-0")}/hqdefault.jpg`,
          title: "BARRA SUL - CONVENIÊNCIA | RB FILMES",
          tag: "CATEGORIA 3",
          url: "https://www.youtube.com/watch?v=Wa18W--vO-0"
        },
        {
          id: "5",
          preview: `https://img.youtube.com/vi/${getYouTubeId("https://www.youtube.com/watch?v=yDwdjkQb_Dg&t")}/hqdefault.jpg`,
          title: "ERIKA E JAIR | RB FILMES",
          tag: "CATEGORIA 2",
          url: "https://www.youtube.com/watch?v=yDwdjkQb_Dg&t"
        },
        {
          id: "6",
          preview: `https://img.youtube.com/vi/${getYouTubeId("https://www.youtube.com/watch?v=yzu9BKs6i5E")}/hqdefault.jpg`,
          title: "Rodinaldos - Correr Atrás",
          tag: "CATEGORIA 1",
          url: "https://www.youtube.com/watch?v=yzu9BKs6i5E"
        },
        {
          id: "7",
          preview:  `https://img.youtube.com/vi/${getYouTubeId("https://www.youtube.com/watch?v=DuEX4z7SPz8")}/hqdefault.jpg`,
          title: "Shave the hair before do a tattoo.",
          tag: "CATEGORIA 2",
          url: "https://www.youtube.com/watch?v=DuEX4z7SPz8"
        }
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "VER TODOS",
      filterMenuActive: false,
      pickedFilterDropdown: "NOVOS"
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("VER TODOS");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "VER TODOS") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NOVOS" });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if(event) {
      this.setState({ filterMenuActive: true });
    }else {
      this.setState({ filterMenuActive: false });
    }
  }

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NOVOS") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    }else if (filter === "ANTIGOS") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result});
  }

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) =>{ 
        return (
        <ProjectBox url={project.url} preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
      )});
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if(this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p className="font12" onClick={() => this.filterDropDownHandler("NOVOS")}>
            NOVOS
          </p>
          <p className="font12" onClick={() => this.filterDropDownHandler("ANTIGOS")}>
            ANTIGOS
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="TRABALHOS" />
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
                <ul>
                  <li className={this.state.pickedFilter === "VER TODOS" ? "portfolio__nav-active font12" : "font12"} onClick={() => this.filterGallery("VER TODOS")}>
                    VER TODOS
                  </li>
                  <li
                    className={this.state.pickedFilter === "CATEGORIA 1" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("CATEGORIA 1")}
                  >
                    CATEGORIA 1
                  </li>
                  <li
                    className={this.state.pickedFilter === "CATEGORIA 2" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("CATEGORIA 2")}
                  >
                    CATEGORIA 2
                  </li>
                  <li className={this.state.pickedFilter === "CATEGORIA 3" ? "portfolio__nav-active font12" : "font12"} onClick={() => this.filterGallery("CATEGORIA 3")}>
                    CATEGORIA 3
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <div className="portfolio__filter" onMouseEnter={() => this.filterMenuHover(true)} onMouseLeave={() => this.filterMenuHover(false)}>
                <p className="font12">{this.state.pickedFilterDropdown}</p>
                <img src={Arrow} alt="arrow" />
                {filterDroppDown}
              </div>
            </Col>
          </Row>
          <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry>
          <Row className="flex-center padding40">
            <Button label="QUE TAL SEU PROJETO AQUI?" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
