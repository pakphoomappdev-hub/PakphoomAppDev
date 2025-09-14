// Smooth scrolling for navigation
        function scrollToContact() {
            document.getElementById('contact').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        // Modal Controls
        const contactModal = document.getElementById('contactModal');
        const detailsModal = document.getElementById('detailsModal');

        function openContactModal() {
            contactModal.classList.remove('hidden');
            contactModal.classList.add('flex');
        }

        function closeContactModal() {
            contactModal.classList.add('hidden');
            contactModal.classList.remove('flex');
        }

        function openDetailsModal() {
            detailsModal.classList.remove('hidden');
            detailsModal.classList.add('flex');
        }

        function closeDetailsModal() {
            detailsModal.classList.add('hidden');
            detailsModal.classList.remove('flex');
        }

        // Close modal when clicking outside
        contactModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeContactModal();
            }
        });

        detailsModal.addEventListener('click', function(e) {
             if (e.target === this) {
                closeDetailsModal();
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to navigation
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('navbar');
            const navTitle = document.getElementById('nav-title');
            const navLinks = document.querySelectorAll('.nav-link');
            const navContactBtn = document.getElementById('nav-contact-btn');

            if (window.scrollY > 50) {
                nav.classList.add('bg-white', 'bg-opacity-95', 'backdrop-blur-md', 'shadow-lg');
                navTitle.classList.remove('text-white');
                navTitle.classList.add('text-gray-900');
                navLinks.forEach(link => {
                    link.classList.remove('text-white');
                    link.classList.add('text-gray-700');
                });
                navContactBtn.classList.remove('bg-white', 'text-indigo-600');
                navContactBtn.classList.add('bg-indigo-600', 'text-white');

            } else {
                nav.classList.remove('bg-white', 'bg-opacity-95', 'backdrop-blur-md', 'shadow-lg');
                navTitle.classList.add('text-white');
                navTitle.classList.remove('text-gray-900');
                navLinks.forEach(link => {
                    link.classList.add('text-white');
                    link.classList.remove('text-gray-700');
                });
                navContactBtn.classList.add('bg-white', 'text-indigo-600');
                navContactBtn.classList.remove('bg-indigo-600', 'text-white');
            }
        });

        // NEW: Portfolio Modal
        const portfolioData = {
            p1: {
                title: 'แอปสร้าง Sales Orders',
                description: `ลูกค้าต้องการระบบที่จะมาช่วยสร้าง Sales Orders จากจำนวนสินที่มีใน Stock และจากนั้นสามารถส่งเป็น E-mail ไปถึงทีมฝ่ายขายได้จบภายในระบบ \n\n- ฟังก์ชั่นเลือกายการสินค้าอ้างอิงตามจำนวนใน Stock \n- ระบบตรวจสอบจำนวนของที่มีใน Stock \n- Dashboard สรุปยอดรายการขาย \n- ส่งอีเมลอัตโนมัติถึงทีมขาย \n- ระบบแอดมินสำหรับจัดการสินค้าและ Stock`,
                images: [
                    'images/demo/demo1-1.png',
                    'images/demo/demo1-2.png',
                    'images/demo/demo1-3.png',
                    'images/demo/demo1-4.png'
                ]
            },
            p2: {
                title: 'แอปจัดการข้อมูลสาขา Franchises',
                description: `พัฒนาแอปสำหรับใช้เก็บข้อมูลสาขา Franchises ที่มีข้อมูลของลูกค้าและข้อมูลพื้นฐานที่จำเป็นของสาขา \n\n- หน้าโปรไฟล์ลูกค้าพร้อมข้อมูลที่จำเป็น \n- ระบบ Run Number เลขที่สาขาอัตโนมัติ \n- มีปฏิทินแสดงวันครบกำหนดชำระเงิน \n- ระบบแอดมินสำหรับจัดการข้อมูลสาขาและข้อมูลลูกค้า`,
                images: [
                    'images/demo/demo2-1.png',
                    'images/demo/demo2-2.png',
                    'images/demo/demo2-3.png',
                    'images/demo/demo2-4.png'
                ]
            },
            p3: {
                title: 'แอปจัดการข้อมูลพนักงานและข้อมูลบริษัท',
                description: `สร้างระบบที่สามารถช่วยในการจัดการข้อมูลพนักงานที่สมัครเข้ามาทำงาน การคัดเลือกพนักงานดีเด่น การตรวจสอบติดตามสภานะของงานและทรัพย์สินของบริษัท \n\n- ระบบคัดเลือกพนักงาน \n- ระบบจัดเก็บข้อมูลพนักงาน \n- ระบบติดตามสถานะงาน \n- ระบบจัดการทรัพย์สินของบริษัท \n- ระบบแอดมินสำหรับจัดการข้อมูลพนักงานและข้อมูลบริษัท`,
                images: [
                    'images/demo/demo3-1.png',
                    'images/demo/demo3-2.png',
                    'images/demo/demo3-3.png',
                    'images/demo/demo3-4.png'
                ]
            }
        };

        const portfolioModal = document.getElementById('portfolioModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalImages = document.getElementById('modalImages');
        const modalDescription = document.getElementById('modalDescription');

        function openPortfolioModal(projectId) {
            const project = portfolioData[projectId];
            if (!project) return;

            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            
            modalImages.innerHTML = ''; // Clear previous images
            project.images.forEach(src => {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'bg-gray-100 rounded-lg overflow-hidden aspect-video';
                const img = document.createElement('img');
                img.src = src;
                img.alt = project.title;
                img.className = 'w-full h-full object-cover';
                imgContainer.appendChild(img);
                modalImages.appendChild(imgContainer);
            });

            portfolioModal.classList.remove('hidden');
            portfolioModal.classList.add('flex');
        }

        function closePortfolioModal() {
            portfolioModal.classList.add('hidden');
            portfolioModal.classList.remove('flex');
        }

        portfolioModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closePortfolioModal();
            }
        });