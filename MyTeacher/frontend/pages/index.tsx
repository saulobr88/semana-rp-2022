import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'

import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const {
    listaProfessores,
    nome,
    setNome,
    email,
    setEmail,
    professorSelecionado,
    setProfessorSelecionado,
    marcarAula,
    mensagem,
    setMensagem,
  } = useIndex();

  return (
    <>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista 
          professores={listaProfessores}
          onSelect={(professor) => setProfessorSelecionado(professor)}
        />
      </Box>

      <Dialog 
        open={professorSelecionado !== null} 
        onClose={() => setProfessorSelecionado(null)} 
        fullWidth 
        PaperProps={{sx: {p: 5}}}
      >
        <h4>Agendar auala com {professorSelecionado?.nome}</h4>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label="Digite o nome" 
              type="text"
              fullWidth
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
            {nome}
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label="Digite o email"
              type="email"
              fullWidth
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {email}
          </Grid>
        </Grid>

        <DialogActions sx={{mt: 5}}>
          <Button onClick={() => setProfessorSelecionado(null)}>Cancelar</Button>
          <Button onClick={() => marcarAula()}>Marcar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={mensagem.length > 0}
        message={mensagem}
        autoHideDuration={2500}
        onClose={() => setMensagem('')}
        key={'top' + 'right'}
      />

    </>
  )
}

export default Home
