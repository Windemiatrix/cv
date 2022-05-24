import Name from "./components/Name";
import Profession from "./components/Profession";
import BlockSummary from "./components/BlockSummary";
import BlockExperience from "./components/BlockExperience";
import BlockEducation from "./components/BlockEducation";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import BlockContacts from "./components/BlockContacts";
import BlockSkills from "./components/BlockSkills";


function App() {
    return (
        <Container className="App">
            <Row>
                <Col xs={8}>
                    <Name content={"Roman Martsev"}/>
                    <Profession content={"Site Reliability Engineer / DevOps Engineer"}/>
                    <BlockSummary
                        title={"Summary"}
                        description={
                            [
                                "Professional with experience in *nix servers and Network, administration, DevOps practices and troubleshooting. I have working experience with cloud platforms such as Azure, VmWare, GCP, AWS, Yandex Cloud.",
                                "Seeking for the next career step in DevOps practices and company interested in implementing projects that will help optimize business processes and increase profits. I would also like to learn and help others develop professionally."
                            ]
                        }
                    />
                </Col>
                <Col xs={4}>
                    <BlockContacts
                        placement={"Vladimir, Russia"}
                        phone={"+7 (904) 037-37-36"}
                        email={"r.martsev@gmail.com"}
                        telegram={"Windemiatrix"}
                    />
                    <BlockSkills
                        title={"Skills"}
                        content={[
                            "Bash, C#, Go",
                            "Azure, AWS, GCP, Yandex Cloud, VmWare",
                            "Packer, Terraform, Ansible",
                            "Kubernetes, Docker",
                            "Zabbix, ELK, Prometheus",
                        ]}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <BlockExperience
                        title={"Experience"}
                        content={[
                            {
                                company: "Dodo Engineering LLC, Syktyvkar, Russia – Site Reliability Engineer",
                                dates: "June 2021 – PRESENT",
                                description: "IT product for business: pizza, coffee, shawarma",
                                projectsTitle: "Projects in Dodo Engineering",
                                projectsContent: [
                                    {
                                        title: "Securing connections to development and production environments",
                                        description: "Searching for decision that will allow working with high security level with Azure and Yandex clouds",
                                        data: [
                                            "Compared prices and functionality of different decisions that provides Yandex and Azure.",
                                            "Created PoC for each of them.",
                                            "Prepared RFC after testing.",
                                            "Implemented selected decision to infrastructure.",
                                        ],
                                        techStack: "Terraform",
                                    },
                                    {
                                        title: "SSL certificates monitoring",
                                        description: "Small project for monitoring expiration date of each certificates created by Gogetssl",
                                        data: [
                                            "Wrote small bash script that went to API anf prepared metrics for prometheus",
                                            "Prepared and launched pod with that.",
                                            "Implemented metrics to prometheus",
                                        ],
                                        techStack: "Bash, Docker, Kubernetes, Prometheus",
                                    },
                                    {
                                        title: "Layer 4 / layer 7 security",
                                        description: "Seeking for decision that helps to secure infrastructure from DDoS and bots attacks",
                                        data: [
                                            "Compared pricing, functionality and security level of decisions: Akamai, Cloudflare, Variti.",
                                            "Prepared configuration as IaC, switched peace of production traffic to each decision one by one for some testing period.",
                                            "Prepared RFC after testing.",
                                            "Implemented selected decision to business products, that were needed that.",
                                        ],
                                        techStack: "Terraform",
                                    },
                                    {
                                        title: "Migration from China Azure to Europe Azure",
                                        description: "There was a copy of infrastructure for a small peace of business in China",
                                        data: [
                                            "Researched decisions that could be implemented for traffic between Europe and China.",
                                            "Transferred data of MySQL.",
                                            "Prepared infrastructure in Kubernetes.",
                                            "Transferred traffic from China Azure to Europe Azure.",
                                        ],
                                        techStack: "Terraform, Bash, MySQL",
                                    },
                                ],
                            },
                            {
                                company: "ORES LLC, Vladimir, Russia – DevOps Engineer",
                                dates: "July 2019 – August 2021",
                                description: "Acting as the sole executive body of power grid companies",
                                projectsTitle: "Projects in ORES",
                                projectsContent: [
                                    {
                                        title: "IaC in network infrastructure",
                                        description: "Configuring routing and switching protocols, certificates for access, port publications, firewall, device names, etc. Creating a template using a packer, setting up using an ansible provider, creating instances based on prepared templates and configuring them using an ansible provider.",
                                        data: [
                                            "Developed Ansible roles for configuring Cisco, Mikrotik and OpenWRT based devices.",
                                            "Developed Jinja2 templates for RouterOS scripts.",
                                            "Created Ansible playbooks for configuring network infrastructure.",
                                        ],
                                        techStack: "Ansible, Git.",
                                    },
                                    {
                                        title: "IaC in cloud infrastructure",
                                        description: "",
                                        data: [
                                            "Developed Packer configuration for creation *nix based systems templates.",
                                            "Developed Terraform configuration for creating virtual machine instances.",
                                            "Developed Ansible playbooks for preparing VM templates to Kubespray deployment.",
                                            "Developed Jinja2 templates for RouterOS scripts.",
                                        ],
                                        techStack: "Packer, Terraform, Ansible, Kubespray, Git.",
                                    },
                                    {
                                        title: "Email and anti-spam services",
                                        description: "Cluster of two anti-spam gateways, 5 mail servers",
                                        data: [
                                            "Configured email service.",
                                            "Configured anti-spam email gateway service.",
                                            "Configured cluster of geographically remote anti-spam servers.",
                                            "Securing email with SPF and PTR records.",
                                            "Securing email with TKIM encryption.",
                                        ],
                                        techStack: "Proxmox mail gateway, iRedMail, DNS.",
                                    },
                                    {
                                        title: "Securing critical information infrastructure",
                                        description: "",
                                        data: [
                                            "Designed and implemented securing system for protected perimeter, workstations, servers and network infrastructure.",
                                            "Developed documentation in accordance with the requirements of Russian legislation.",
                                        ],
                                        techStack: "Kaspersky, SecretNet Studio, IPSec, OSPF.",
                                    },
                                    {
                                        title: "Layer 2 and layer 3 network infrastructure",
                                        description: "The network infrastructure consists of about 150 devises located locally and at geographically remote sites. Manufacturers: Cisco, Mikrotik, Zyxel, iRZ, Robustel.",
                                        data: [
                                            "Designed and developed network infrastructure on layers 2 and 3.",
                                            "Designed and configured MST protocol for switches topology.",
                                            "Designed and configured VLAN for dividing the network into broadcast domains.",
                                            "Designed and configured GRE tunnels with IPSec encryption.",
                                            "Designed and configured OSPF and IEGRP dynamic routing.",
                                            "Designed and configured Controlled Access Point system Manager on Mikrotik devices.",
                                        ],
                                        techStack: "OSPF, EIGRP MST, IPSec, GRE.",
                                    },
                                ],
                            },
                            {
                                company: "ORES-Vladimirskaya oblast JSC, Vladimir, Russia – Network Engineer",
                                dates: "April 2015 – July 2019",
                                description: "Services for the transmission of electricity, maintenance of electrical networks, services for dispatch control and operational switching in subordinate electrical networks",
                                projectsTitle: "Projects in ORES-VO",
                                projectsContent: [
                                    {
                                        title: "Monitoring services",
                                        description: "About 70 devices to be monitored.",
                                        data: [
                                            "Configured Zabbix as monitoring service for network devices, Windows and *nix based systems metrics.",
                                            "Configured LibreNMS as service for monitoring network devices health and automation of building a network map.",
                                            "Configured ChatOps for notifications of incidents.",
                                            "Making and supporting templates for network devices, Windows and *nix based systems on Zabbix.",
                                        ],
                                        techStack: "Zabbix, LibreNMS, SNMP.",
                                    },
                                    {
                                        title: "Backup service",
                                        description: "About 30 devices to be backed up.",
                                        data: [
                                            "Configured Bareos as backup service with centralized management for Windows and *nix based systems.",
                                            "Optimized resource utilization through schedules and backup levels.",
                                        ],
                                        techStack: "Bareos.",
                                    },
                                ],
                            },
                            {
                                company: "MIR LLC, Vladimir, Russia – Developer",
                                dates: "December 2018 – November 2019",
                                description: "Recycling of secondary raw materials",
                                projectsTitle: "Projects in MIR",
                                projectsContent: [
                                    {
                                        title: "Business process automation",
                                        description: "Application for interacting with counterparties for orders, sales and settlements; accounting for recycled material.",
                                        data: [
                                            "Designed and developed MySQL database.",
                                            "Implemented RESTful API.",
                                            "Implement, designed and developed desktop application on c# with Catel framework.",
                                        ],
                                        techStack: "MySQL, REST, C#, MVVM, Catel",
                                    },
                                ],
                            },
                        ]}
                    />
                    <BlockEducation
                        title={"Education"}
                        content={[
                            {
                                title: "Vladimir State University named after Alexander and Nikolay Stoletovs – Engineer Degree.",
                                dates: "September 2005 – July 2010",
                                description: "Diploma – Service of transport and technological machines (in road transport).",
                            },
                            {
                                title: "Vladimir State University named after Alexander and Nikolay Stoletovs – Bachelor Degree.",
                                dates: "September 2013 – Juny 2016",
                                description: "Honors Degree – information systems and technologies.",
                            },
                        ]}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
