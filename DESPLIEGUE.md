# 🚀 Guía de Despliegue en Vercel

Tu página está lista para desplegar. Sigue estos pasos:

## Opción 1: Despliegue Automático (Recomendado)

Vercel detectará automáticamente tu repositorio de GitHub y desplegará la página.

### Pasos:
1. Ve a https://vercel.com
2. Haz clic en "New Project"
3. Conecta tu cuenta de GitHub
4. Selecciona `Biperboy/funko-courses-site`
5. Haz clic en "Deploy"

**¡Listo!** Recibirás un enlace como:
```
https://funko-courses-site.vercel.app
```

---

## Opción 2: Despliegue Local

Si tienes token de Vercel:

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Autenticarse
vercel login

# 3. Desplegar
vercel --prod
```

---

## Opción 3: Usar GitHub Actions (Automático con cada push)

1. Ve a https://vercel.com/account/tokens
2. Crea un nuevo token
3. Ve a tu repositorio GitHub → Settings → Secrets
4. Agrega estos secretos:
   - `VERCEL_TOKEN`: Tu token de Vercel
   - `VERCEL_ORG_ID`: Tu ID de organización (en Vercel)
   - `VERCEL_PROJECT_ID`: ID del proyecto (se genera en primer deploy)

Después, cada push a `main` desplegará automáticamente.

---

## URLs Importantes

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Tu Repositorio**: https://github.com/Biperboy/funko-courses-site
- **Tu Página** (una vez desplegada): https://funko-courses-site.vercel.app

---

## Variables de Entorno (Opcional)

Si necesitas agregar variables más tarde:

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega tus variables

---

## Dominio Personalizado (Opcional)

Para usar un dominio propio:

1. Ve a Settings → Domains en Vercel
2. Agrega tu dominio personalizado
3. Sigue las instrucciones de DNS

---

## Monitoreo

En el dashboard de Vercel puedes ver:
- ✅ Builds recientes
- ✅ Logs de despliegue
- ✅ Analíticas de tráfico
- ✅ Performance

---

**¿Necesitas ayuda?** Visita: https://vercel.com/docs
