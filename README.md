# 🚀 Portfólio Empresarial Profissional

Um portfólio empresarial moderno, responsivo e profissional desenvolvido com HTML5, CSS3 e JavaScript puro.

## ✨ Características

### Design e UX
- 🎨 Design moderno e profissional
- 📱 Totalmente responsivo (mobile-first)
- ⚡ Performance otimizada
- ♿ Acessibilidade (WCAG 2.1)
- 🎭 Animações suaves e transições

### Funcionalidades
- 🧭 Navegação suave entre seções
- 📲 Menu hambúrguer para mobile
- 🎯 Filtros de portfólio interativos
- 📧 Formulário de contato funcional
- 📊 Contadores animados de estatísticas
- 🔍 Otimização para SEO

### Tecnologias
- HTML5 semântico
- CSS3 moderno (Grid, Flexbox, Custom Properties)
- JavaScript ES6+
- Font Awesome (ícones)
- Google Fonts (Inter)

## 🏗️ Estrutura do Projeto

```
portifolho/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos principais
├── js/
│   └── script.js      # Funcionalidades JavaScript
├── images/            # Pasta para imagens
└── README.md         # Este arquivo
```

## 🚀 Como Usar

### 1. Abertura Simples
Simplesmente abra o arquivo `index.html` em qualquer navegador moderno.

### 2. Servidor Local (Recomendado)
Para melhor experiência, use um servidor local:

```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

### 3. VS Code Live Server
Se estiver usando VS Code, instale a extensão "Live Server" e clique com o botão direito no `index.html` → "Open with Live Server".

## ✏️ Personalização

### 1. Informações Pessoais/Empresariais
Edite as seguintes seções no `index.html`:

- **Logo/Nome**: Procure por "PortfólioPro" e substitua
- **Título Principal**: Na seção `.hero-title`
- **Descrição**: Na seção `.hero-description`
- **Sobre**: Na seção `.about-text`
- **Contato**: Na seção `.contact-info`

### 2. Cores e Visual
No arquivo `css/style.css`, modifique as variáveis CSS:

```css
:root {
    --primary-color: #2563eb;    /* Cor principal */
    --accent-color: #f59e0b;     /* Cor de destaque */
    --text-primary: #1f2937;     /* Texto principal */
    /* ... outras cores */
}
```

### 3. Adicionando Imagens
1. Coloque suas imagens na pasta `images/`
2. Substitua os placeholders no HTML:

```html
<!-- Ao invés de: -->
<div class="portfolio-placeholder">
    <i class="fas fa-globe"></i>
</div>

<!-- Use: -->
<img src="images/projeto1.jpg" alt="Projeto 1">
```

### 4. Conteúdo dos Serviços
Edite a seção `.services-grid` para adicionar/modificar serviços:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-seu-icone"></i>
    </div>
    <h3>Seu Serviço</h3>
    <p>Descrição do serviço...</p>
    <!-- ... -->
</div>
```

### 5. Projetos do Portfólio
Modifique a seção `.portfolio-grid` para seus projetos:

```html
<div class="portfolio-item" data-category="web">
    <div class="portfolio-image">
        <img src="images/projeto.jpg" alt="Projeto">
        <div class="portfolio-overlay">
            <h4>Nome do Projeto</h4>
            <p>Descrição do projeto</p>
            <a href="https://seulink.com" class="portfolio-link">Ver Projeto</a>
        </div>
    </div>
</div>
```

## 📊 SEO e Performance

### Meta Tags Incluídas
- Viewport para responsividade
- Description para SEO
- Charset UTF-8

### Performance
- CSS e JS minificados (em produção)
- Lazy loading de imagens
- Fontes otimizadas
- Animações performáticas

### Para Melhorar Ainda Mais
1. **Adicione meta tags Open Graph**:
```html
<meta property="og:title" content="Seu Nome - Portfólio">
<meta property="og:description" content="Sua descrição">
<meta property="og:image" content="images/preview.jpg">
```

2. **Favicon**:
```html
<link rel="icon" type="image/x-icon" href="images/favicon.ico">
```

3. **Analytics**:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🎨 Customizações Avançadas

### Adicionando Novas Seções
1. Adicione o HTML da seção
2. Crie os estilos CSS correspondentes
3. Adicione o link na navegação
4. Atualize o JavaScript se necessário

### Formulário de Contato
O formulário está configurado para demonstração. Para usar em produção:

1. **Backend próprio**: Crie um endpoint para receber os dados
2. **EmailJS**: Serviço para envio de emails via JavaScript
3. **Netlify Forms**: Se hospedado no Netlify
4. **Formspree**: Serviço externo de formulários

Exemplo com EmailJS:
```javascript
emailjs.send("service_id", "template_id", {
    name: formData.get('nome'),
    email: formData.get('email'),
    subject: formData.get('assunto'),
    message: formData.get('mensagem')
});
```

## 📱 Responsividade

O portfólio é responsivo para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1200px+)

## 🌐 Navegadores Suportados

- ✅ Chrome (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Edge (últimas 2 versões)

## 🚀 Deploy/Hospedagem

### Opções Gratuitas
1. **GitHub Pages**
2. **Netlify** (recomendado)
3. **Vercel**
4. **Firebase Hosting**

### Netlify (Recomendado)
1. Faça upload da pasta no Netlify
2. Configure domínio personalizado (opcional)
3. Ative HTTPS automático

### GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Melhorar a documentação
- Otimizar o código

## 📞 Suporte

Se tiver dúvidas sobre a implementação ou customização, você pode:
- Abrir uma issue no GitHub
- Consultar a documentação das tecnologias usadas
- Verificar os comentários no código

---

**Desenvolvido com ❤️ para profissionais que querem se destacar!**

## 🎯 Próximos Passos

Após a configuração básica, considere implementar:

1. **Blog integrado**
2. **Sistema de comentários**
3. **Newsletter**
4. **Chat online**
5. **Multi-idioma**
6. **Dark mode**
7. **PWA (Progressive Web App)**

Boa sorte com seu novo portfólio! 🚀