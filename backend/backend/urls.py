
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic.base import TemplateView

from linkup.views import MyTokenObtainPairView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('linkup.urls')),
    path('auth/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]