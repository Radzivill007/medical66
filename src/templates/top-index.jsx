import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Navbar from "views/Navbar";
import Top from "views/Top";
import Footer from "views/Footer";
import * as Sections from "views/Sections";
import SEO from "components/SEO";
import LanguageSelector from "components/LanguageSelector";

import "utils/fixFontAwesome";
import breakDownAllNodes from "utils/breakDownAllNodes";
import fileNameToSectionName from "utils/fileNameToSectionName";

import "../style/main.scss";

/**
 * get file name list from content/sections folder
 */
export const query = graphql`
  query IndexQuery($langKey: String!) {
    site {
      siteMetadata {
        keywords
        description
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { order: ASC, fields: [fields___directoryName, fields___fileName] }
    ) {
      nodes {
        frontmatter {
          brand
          anchor
          header
          email
          address
          imageFileName
          menuText
          accordion {
              quest
              answer
          }
          products {
            extraInfo
            header
            subheader
            subheaderOutside
            more
            close
            imageFileNameDetail
            imageFileName
          }
          privacyHref
          privacyText
          advantages {
            content
            header
            iconName
          }
          social {
            facebook
            github
            linkedin
            medium
            twitter
          }
          subheader
          teamMember {
            imageFileName
          }
          telephone
          title
          timeline {
            content
            header
            imageContent
            subheader
          }
        }
        fields {
          fileName
          directoryName
        }
      }
    }
  }
`;

const IndexPage = ({ data, pageContext: { langKey, defaultLang, langTextMap } }) => {
    const {
        site: {
            siteMetadata: { keywords, description },
        },
        allMarkdownRemark: { nodes },
    } = data;

    const { topNode, navBarNode, anchors, footerNode, sectionsNodes } = breakDownAllNodes(nodes);

    let langSelectorPart;
    if (langTextMap != null && Object.keys(langTextMap).length > 1) {
        langSelectorPart = (
            <LanguageSelector langKey={langKey} defaultLang={defaultLang} langTextMap={langTextMap} />
        );
    }

    return (
        <>
            <SEO lang={langKey} title="Прокат средств реабилитации" keywords={keywords} description={description} />
            <Navbar
                anchors={anchors}
                frontmatter={navBarNode.frontmatter}
                extraItems={langSelectorPart}
            />
            <Top frontmatter={topNode.frontmatter} />
            {
                // dynamically import sections
                sectionsNodes.map(({ frontmatter, fields: { fileName } }, ind) => {
                    const sectionComponentName = fileNameToSectionName(fileName);
                    const SectionComponent = Sections[sectionComponentName];

                    return SectionComponent ? (
                        <SectionComponent
                            key={sectionComponentName}
                            className={ind % 2 === 1 ? "bg-light" : null}
                            frontmatter={frontmatter}
                        />
                    ) : null;
                })
            }
            <Footer frontmatter={footerNode.frontmatter} />
        </>
    );
};

IndexPage.propTypes = {
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.object,
};

IndexPage.defaultProps = {
    pageContext: {
        langKey: "ru",
        defaultLang: "ru",
        langTextMap: {},
    },
};

export default IndexPage;
