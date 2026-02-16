#!/bin/bash

# Navigate to the frontend public directory
cd /Users/khushiagrawal/Desktop/website/frontend/public

# Create directory for faculty images
mkdir -p faculty_images
cd faculty_images

echo "Downloading DSCE Faculty Images..."
echo "========================================"

# Download ISE Faculty Images with proper naming
echo "Downloading ISE Faculty..."
wget -O annapurna_patil.jpg https://www.dsce.edu.in/images/ISE/faculty/DrAnnapurna.jpg
wget -O rajeshwari_janthakal.jpg https://www.dsce.edu.in/images/ISE/faculty/rajeshwari.jpg
wget -O shalini_kb.jpg https://www.dsce.edu.in/images/ISE/faculty/shalini.jpg
wget -O bharath_bc.jpg https://www.dsce.edu.in/images/ISE/faculty/bharath.jpg
wget -O vidya_byakod.jpg https://www.dsce.edu.in/images/ISE/faculty/Vaidehi.jpg
wget -O madhura_j.jpg https://www.dsce.edu.in/images/ISE/faculty/Madhura.jpg
wget -O latha_anuj.jpg https://www.dsce.edu.in/images/ISE/faculty/lathap.jpg
wget -O bhavani_k.jpg https://www.dsce.edu.in/images/ISE/faculty/bindu.jpg
wget -O prathima_mabel_j.jpg https://www.dsce.edu.in/images/ISE/faculty/prathima.jpg
wget -O reshma_s.jpg https://www.dsce.edu.in/images/ISE/faculty/Reshma.jpg
wget -O kusumika_dutta.jpg https://www.dsce.edu.in/images/ISE/faculty/rekha_jayram.jpg
wget -O chandrakala_bm.jpg https://www.dsce.edu.in/images/ISE/faculty/chandrakala.jpg
wget -O muzameel_ahmed.jpg https://www.dsce.edu.in/images/ISE/faculty/muzamil.jpg
wget -O vijetha_madhavaram.jpg https://www.dsce.edu.in/images/ISE/faculty/Vijetha.jpg
wget -O swapna_vani_dixit.jpg https://www.dsce.edu.in/images/ISE/faculty/Swapna.jpg
wget -O monicashree_m.jpg https://www.dsce.edu.in/images/ISE/faculty/Preethi.jpg
wget -O spoorthi_m.jpg https://www.dsce.edu.in/images/ISE/faculty/Spoorthi.jpg
wget -O sai_s_joshi.jpg https://www.dsce.edu.in/images/ISE/faculty/Yogesh.jpg
wget -O girija_r.jpg https://www.dsce.edu.in/images/ISE/faculty/Girija.jpg

echo ""
echo "========================================"
echo "Download complete!"
echo "Total images downloaded: $(ls -1 *.jpg 2>/dev/null | wc -l)"
echo "Images saved in: $(pwd)"
echo "========================================"
