let blogImage = ''; // Variable to store the image data URL
        let additionalImage1 = ''; // Variable to store the additional image 1 data URL
        let additionalImage2 = ''; // Variable to store the additional image 2 data URL
        let inputImage = '';
        let outputImage = '';

        function loadImage(event) {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    blogImage = e.target.result; // Store the image data URL
                    document.getElementById('main-image').src = blogImage; // Update the image element
                }
                reader.readAsDataURL(file); // Read the file as a data URL
            }
        }

        function loadAdditionalImage1(event) {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    additionalImage1 = e.target.result; // Store the additional image 1 data URL
                    document.getElementById('additional-image-1').src = additionalImage1; // Update the additional image 1 element
                }
                reader.readAsDataURL(file); // Read the file as a data URL
            }
        }

        function loadAdditionalImage2(event) {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    additionalImage2 = e.target.result; // Store the additional image 2 data URL
                    document.getElementById('additional-image-2').src = additionalImage2; // Update the additional image 2 element
                }
                reader.readAsDataURL(file); // Read the file as a data URL
            }
        }

        function inputImage1(event) {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    inputImage = e.target.result; // Store the additional image 2 data URL
                    document.getElementById('input-image').src = inputImage; // Update the additional image 2 element
                }
                reader.readAsDataURL(file); // Read the file as a data URL
            }
        }

        function outputImage1(event) {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    outputImage = e.target.result; // Store the additional image 2 data URL
                    document.getElementById('output-image').src = outputImage; // Update the additional image 2 element
                }
                reader.readAsDataURL(file); // Read the file as a data URL
            }
        }

        document.getElementById('downloadBtn').addEventListener('click', function() {
            // Get the content of the div
            var content = document.getElementById('content').innerHTML;

            content = content.replace(/<img[^>]*src="([^"]*)"[^>]*>/, '<img src="$1" width="300" height="300" />');

            // Construct the blob content using a regular string
            var blobContent = 
                '<!DOCTYPE html>' +
                '<html>' +
                '<head>' +
                '<meta charset="utf-8">' +
                '<title>Document</title>' +
                '<style>' +
                'body { font-family:TimesNewRoman, serif; , line-height: 1.5; }' +
                'h2 { color: black; }' +
                'p { margin: 10px 0; }' +
                '.main-image { width: 300px; height: 300px; }' +
                '.image {width: 300px; height: 300px; }' +  // Set the desired width and height here
                '</style>' +
                '</head>' +
                '<body>' +
                content.replace(/src="https:\/\/via\.placeholder\.com\/300"/, 'src="' + blogImage + '"') +
                '</body>' +
                '</html>';

            // Create a Blob of the content with MIME type for Word documents
            var blob = new Blob(['\ufeff' + blobContent], {
                type: 'application/msword'
            });

            // Create a link element
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'div-content.doc'; // Name of the file to be downloaded

            // Append link to the body (not visible to the user)
            document.body.appendChild(link);

            // Trigger the download
            link.click();

            // Remove the link from the document
            document.body.removeChild(link);
        });