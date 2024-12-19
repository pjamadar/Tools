  import { CommonModule } from '@angular/common';
  import { Component, Renderer2 } from '@angular/core';
  
  @Component({
    selector: 'app-tools',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.css']  
  })
  export class ToolsComponent {
    items = [
      {
        name: 'Climate, Environment and Sustainability',
        image:'assets/images/climate.png',
        subItems: [
          {
            subName: 'Safari',
            image: 'assets/images/Safari.png',
            description: 'SAFARI estimates the energy, emissions, and resources implications of achieving developmental goals such as food, housing, healthcare, education, power for all, and transport up to 2050.The main objective of this project is to develop an energy model as a visualisation and planning tool (Decision Support System) that will enable policymakers to create and test their strategies virtually. The purpose of the energy model is to estimate the materials, energy, and emissions implications for India to achieve a desired quality of life’ for all to ultimately understand the synergies and trade-offs involved in balancing developmental goals and climate targets',
            reportLink: 'https://beta.cstep.in/safari/#/'
          },
          {
            subName: 'UO(Urban Observatory)',
            image: 'assets/images/UrbanObservatory.png',
            description: 'The Urban Observatory collects, curates and catalogues geospatial and non-spatial data from multiple sources to aid research, analysis and inform policy',
            reportLink: 'https://demo.cstep.in/uoapp/#/'
          },
          {
            subName: 'SPOORTHI',
            image: 'assets/images/SPOORTHI.png',
            description: 'Spoorthi is a community-owned and managed spatial data system that can aid policy and programming efforts towards the SDG targets of promoting inclusive urbanization and equitable access to water, sanitation and health. The crowd-sourced spatial data platform tracks community priorities through a set of indicators in the aforementioned sectors.',
            reportLink: 'https://beta.cstep.in/undef/#/'
          }
        ]
      },
      {
        name: 'Energy and Power',
        image:'assets/images/EandP.png',
        subItems: [
          {
            subName: 'Renewable Energy Atlas ',
            image: 'assets/images/RenewableEnergyAtlas.png',
            description: 'Renewable Energy (RE) Atlas Tool allows users to examine the land parcels suitable for installing RE systems, considering solar and wind power potential estimated using solar irradiance and wind power density for each state. This platform allows for visualisation and first-cut analysis of national and state level potentials across various RE sectors such as solar, wind, bio-mass and pumped hydro. It is intended to act as a common platform for decision-makers, policy researchers, academia, and industry to visualise RE potential within India.  ',
            reportLink: 'http://darpan.cstep.in/reatlas/'
          },
          {
            subName: 'Dedicated Feeders',
            image: 'assets/images/DedicatedFeeders.png',
            description: 'GIS based assessment of irrigation pumps (substation wise) to improve energy efficiency in Karnataka. This assessment helped GoK to ascertain the efficiency of irrigation pumps using multi-criteria assessment and deploy dedicated-feeder route to estimate overall efficiency gains. These gains can then be realised in form of power savings across five electricity distribution companies.  ',
            reportLink: 'http://darpan.cstep.in/dedicated_feeders/'
          },
          {
            subName: 'TVP(Transmission Visualisation Portal) Bihar',
            image: 'assets/images/TransmissionVisualisationPortal.png',
            description: 'Bihar Power Transmission Visualisation Portal is an online GIS tool that allows users to conduct scenario analysis to ascertain various load and demand conditions created within the system.',
            reportLink: 'http://darpan.cstep.in/tvpbihar/'
          },
          {
            subName: 'High RE',
            image: 'assets/images/HighRE.png',
            description: '',
            reportLink: ''
          },
          {
            subName: 'FRAMES(Feeder-wise Revenue Analysis and Monitoring of Energy Sales)',
            image: 'assets/images/FRAMES.png',
            description: 'Feeder-wise Revenue Analysis and Monitoring of Energy Sales (FRAMES) - A GIS based energy audit tool and a decision-making tool for corporate-level officials, to improve the financial health of the DISCOM.',
            reportLink: 'http://demo.cstep.in/fvatool/'
          },
          {
            subName: 'CREST Bangalore',
            image: 'assets/images/EandP.png',
            description: 'CSTEP’s Rooftop Evaluation for Solar Tool (CREST) accurately assesses the solar potential of rooftops in cities using LiDAR technology.',
            reportLink: 'https://crest.cstep.in/crest/#/'
          },
          {
            subName: 'GIS based Energy Audit Tool',
            image: 'assets/images/GISbasedEnergyAuditTool.png',
            description: 'GIS based energy auditing tool accurately maps feeders with distribution transformers and consumers and helps identify loss-making areas.',
            reportLink: 'https://demo.cstep.in/eatoolbeta/'
          },
          {
            subName: 'CSTEM(CSTEP’s Solar Techno-Economic Model)',
            image: 'assets/images/CSTEP’sSolarTechno-EconomicModelforPhotovoltaics.png',
            description: 'CSTEP’s Solar Techno-Economic Model for Photovoltaics (CSTEM PV) is web-based platform was to serve as a useful tool for prefeasibility analysis of utility scale solar PV plants from a techno-economic standpoint. It was aimed to cater to policy makers, researchers and industry trackers for informed decision making.',
            reportLink: 'https://cstem.cstep.in/cstem/'
          },
          {
            subName: 'NISA(New and Innovative Solar Application)',
            image: 'assets/images/NewandInnovativeSolarApplication.png',
            description: 'NISA is New and Innovative Solar Application. The project is intended to identify the suitable locations across various new solar applications in market and check its fusibility to scale it across the country.',
            reportLink: 'https://staai.cstep.in/'
          },
          {
            subName: 'CREST MP',
            image: 'assets/images/CSTEP’sRooftopEvaluationforSolarTool.png',
            description: 'CSTEP’s Rooftop Evaluation for Solar Tool (CREST) accurately assesses the solar potential of rooftops in cities using LiDAR technology..',
            reportLink: 'https://rtse.cstep.in/mp/'
          },
          {
            subName: 'IETP(India Energy Transformation Platform)',
            image: 'assets/images/IndiaEnergyTransformationPlatform.png',
            description: 'The India Energy Transformation Platform is an informal, independent, multi-stakeholder group of experts aiming to develop an informed narrative on India’s strategies for meeting its Nationally Determined Contributions (NDCs) through non-linear, transformative solutions. This unique initiative hopes to ensure that India stays ahead of the curve and cements its leadership in the global transition to clean energy – even beyond 2030.',
            reportLink: 'http://ietp.in/#/'
          }
        ]
      },
      {
        name: 'Air Quality',
        image:'assets/images/air.png',
        subItems: [
          {
            subName: 'CAPS(Centre for Air Pollution Studies)',
            image: 'assets/images/CAPS.png',
            description: 'The National Clean Air Programme (NCAP) launched by the Ministry of Environment, Forest and Climate Change (MoEFCC) faces many obstacles in its fight against air pollution owing to a lack of scientific evidence and insufficient capacity. The Centre for Air Pollution Studies (CAPS) at CSTEP aims to fill these gaps through the development of emission inventories to generate evidence on air pollution and clean air action plans to devise source-specific interventions. CAPS is also involved in conducting training workshops for local pollution control board officials and awareness workshops to increase public support for successful policy implementation',
            reportLink: 'https://caps.cstep.in/#/'
          },
          {
            subName: 'CSTEPs Emission Inventory for 76 Cities',
            image: 'assets/images/EIwebpage.png',
            description: 'The Center for Study of Science, Technology and Policy (CSTEP), with assistance from 12 other Institutes of Repute (IoRs), developed the Emission Inventories (EI) for 76 Non-attainment cities under the aegis of the National Knowledge Network (NKN) to understand the various polluting sectors of the city and their share in the pollution.',
            reportLink: 'https://ei.cstep.in/'
          },

        ]
      },
      {
        name: 'Strategic Studies',
        subItems: [
          {
            subName: 'E Depot - EV Route',
            image: 'assets/images/StrategicStudies.png',
            description: 'E-Depot was developed to support state transport undertakings (STUs) and electricity distribution companies (DISCOMs) in their plans to deploy e-buses across different cities.',
            reportLink: 'https://demo.cstep.in/E-Depot/#/'
          }
        ]
      },
      {
        name: 'AI and Digital Platforms',
        image:'assets/images/AIandDigitalPlatforms.png',
        subItems: [
          {
            subName: 'SANITECH',
            image: 'assets/images/SANITECH.png',
            description: 'It is a decision support tool that will help cities in India to provide cost-effective and sustainable sanitation options for all, especially the urban poor, through an integrated framework for assessment of different sanitation options.',
            reportLink: 'http://darpan.cstep.in/sanitech/'
          },
          {
            subName: 'PMS(Project Management System)',
            image: 'assets/images/PMS.png',
            description: 'Project Management tool for CSTEP projects Tool to manage projects, proposals, expression of interests (EOI), and engagements within CSTEP.',
            reportLink: 'https://pms.cstep.in/'
          },
          {
          subName: 'GIS Data Explorer',
          image: 'assets/images/GISDataExplorer.png',
          description: 'The GIS Data Explorer is the ultimate solution for accessing, exploring, and downloading GIS data for various geographical locations. This application is designed with a simple, user-friendly interface that allows you to easily select and explore geographic data by location and download it efficiently. Whether you are looking for specific data on a region or need quick access to geographic information, the GIS Data Explorer makes the process straightforward and accessible',
          reportLink: 'http://172.16.7.56:1337'
          }
        ]
      },
      {
        name: 'Communication and Policy Engagement',
        image:'assets/images/CommunicationandPolicyEngagement.png',
        subItems: [
          {
            subName: 'Carbon Meter',
            image: 'assets/images/CarbonMeter.png',
            description: 'Carbon Meter webapp helps user track the environmental impact of a their clothing choices. The app takes the type of clothing and fabric as input, and calculates the carbon emissions produced, equating it to the emissions of a petrol car in kilometers driven. Users also receive an email with detailed insights on how much emissions each fabric type generates, empowering them to make more eco-conscious decisions.',
            reportLink: 'https://carbonmeter.cstep.in/'
          }
        ]
      }
    ];
  currentIndex = 0;
  selectedItem: any = null;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.initScrollButton();
  }

  // Initialize scroll up button functionality
  initScrollButton() {
    const scrollUpBtn = document.getElementById('scrollUpBtn');
    
    if (scrollUpBtn) {
      // Scroll event listener
      window.onscroll = () => {
        if (window.pageYOffset > 20) {
          scrollUpBtn.style.display = 'block';
        } else {
          scrollUpBtn.style.display = 'none';
        }
      };

      // Click event listener for scroll-up button
      scrollUpBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }
  }

  showDetails(item: any) {
    this.selectedItem = item;

    setTimeout(() => {
      const detailsSection = document.getElementById('details-section');
      if (detailsSection) {
        detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.items.length - 1;
    this.updateCarousel();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.items.length - 1) ? this.currentIndex + 1 : 0;
    this.updateCarousel();
  }

  updateCarousel() {
    const offset = -this.currentIndex * 100;
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item: any) => {
      item.style.transform = `translateX(${offset}%)`;
    });
  }
}
   