echo -n "Hallo Word"  | cksum | cut -d\  -f1 | xargs echo printf '%0X\\n' | sh
