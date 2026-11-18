# Tip Vault – ponte di condivisione

PWA installabile su Android che compare nel menu **Condividi** e passa il link a Tip Vault (artifact privato su claude.ai).

Il link viene codificato nell'hash dell'indirizzo (`#add-…`, base64 con `+`→`-1` e `/`→`-2`): l'archivio vero resta su claude.ai e non passa da questo sito.
