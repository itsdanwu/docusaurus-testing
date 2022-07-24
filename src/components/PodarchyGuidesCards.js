import React from 'react'
import './styles.css'
import { podarchyGuidesCardsContent } from './content/PodarchyGuidesCardsContent'

export const PodarchyGuidesCards = () => {
  return (
    <div className={'tools-container'}>
      {podarchyGuidesCardsContent.map((card, index) => (
        <div className={'tools-card'} key={index}>
          <a href={card.toolsLink}>
            <div className={'tools-title-flexbox'}>
              <p className={'tools-title'}>{card.toolsTitle}</p>
              <p className={'tools-version'}>{card.toolsVersion}</p>
            </div>
            <p className={'tools-paragraph'}>{card.toolsParagraph}</p>
          </a>
        </div>
      ))}
    </div>
  )
}