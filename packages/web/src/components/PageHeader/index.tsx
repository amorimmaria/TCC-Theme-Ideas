import React from 'react'
import { Link } from 'react-router-dom'

// Images
import logoImg from '../../assets/images/iconLogo2.svg'
import backIcon from '../../assets/images/icons/back.svg'

// CSS styles
import './styles.css'

interface PageHeaderProps {
  title: string,
  description?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/menu">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Logo" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </div>
    </header>
  )
}

export default PageHeader
