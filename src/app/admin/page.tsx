"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Car,
  MapPin,
  Package,
  CircleDollarSign,
  CalendarCheck,
  BookOpen,
  Settings,
  Lock,
  LogOut,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  Clock,
  Phone,
  MessageCircle,
  Search,
  ExternalLink,
  RefreshCw,
  Download,
  Upload,
  AlertTriangle,
  ChevronRight,
  Eye,
  Shield,
  FileText,
  UserCheck,
  Check,
  X,
  Sparkles,
  Users,
  Briefcase,
  Snowflake,
  Fuel,
  Info,
  Layers,
  Menu,
  KeyRound,
  DollarSign,
  PhoneCall,
  Mail,
  Compass,
} from "lucide-react";

import {
  AdminVehicle,
  AdminDestination,
  AdminTourPackage,
  AdminPricingSettings,
  AdminBooking,
  AdminCompanySettings,
  getStoredVehicles,
  saveStoredVehicles,
  getStoredDestinations,
  saveStoredDestinations,
  getStoredPackages,
  saveStoredPackages,
  getStoredPricing,
  saveStoredPricing,
  getStoredBookings,
  saveStoredBookings,
  addStoredBooking,
  updateStoredBooking,
  deleteStoredBooking,
  getStoredCompanySettings,
  saveStoredCompanySettings,
  resetAllDataToDefaults,
  DEFAULT_VEHICLES,
} from "@/data/adminStore";

import { getAllBlogPosts, deleteCustomBlogPost, BlogPost } from "@/data/blogPosts";

type AdminTab =
  | "dashboard"
  | "fleet"
  | "destinations"
  | "packages"
  | "pricing"
  | "bookings"
  | "blogs"
  | "settings";

const PRESET_IMAGES = [
  { label: "Sedan (Dzire)", url: "/images/fleet/sedan.png" },
  { label: "Toyota Etios", url: "/images/fleet/etios.jpg" },
  { label: "Honda Amaze", url: "/images/fleet/amaze.jpg" },
  { label: "Maruti Ertiga", url: "/images/fleet/ertiga.png" },
  { label: "Kia Carens", url: "/images/fleet/carens.jpg" },
  { label: "Toyota Innova", url: "/images/fleet/innova.png" },
  { label: "Innova Crysta", url: "/images/fleet/innova-crysta.png" },
  { label: "Tempo Traveller", url: "/images/fleet/tempo.png" },
  { label: "Force Urbania", url: "/images/fleet/urbania.png" },
  { label: "Luxury Bus / Coach", url: "/images/fleet/bus.png" },
];

export default function AdminDashboardPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState(false);
  const [showPasscode, setShowPasscode] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Active Tab & Navigation
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Data Stores
  const [vehicles, setVehicles] = useState<AdminVehicle[]>([]);
  const [destinations, setDestinations] = useState<AdminDestination[]>([]);
  const [packages, setPackages] = useState<AdminTourPackage[]>([]);
  const [pricing, setPricing] = useState<AdminPricingSettings | null>(null);
  const [bookings, setBookings] = useState<AdminBooking[]>([]);
  const [companySettings, setCompanySettings] = useState<AdminCompanySettings | null>(null);
  const [blogList, setBlogList] = useState<BlogPost[]>([]);

  // Feedback Notification Toast
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" | "info" } | null>(null);

  const showToast = (text: string, type: "success" | "error" | "info" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Check login on load
  useEffect(() => {
    const isAuthedSession = sessionStorage.getItem("kt_admin_auth");
    const isAuthedLocal = localStorage.getItem("kt_admin_auth");
    if (isAuthedSession === "true" || isAuthedLocal === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch Server Bookings & Sync with Client
  const fetchServerBookings = async () => {
    try {
      const res = await fetch("/api/bookings");
      if (res.ok) {
        const data = await res.json();
        if (data.bookings && Array.isArray(data.bookings) && data.bookings.length > 0) {
          const localBookings = getStoredBookings();
          const mergedMap = new Map();
          for (const b of data.bookings) {
            const key = b.bookingId || b.id;
            mergedMap.set(key, {
              ...b,
              id: key,
              createdAt: typeof b.createdAt === "string" ? b.createdAt : new Date(b.createdAt || Date.now()).toISOString(),
            });
          }
          for (const b of localBookings) {
            const key = b.bookingId || b.id;
            if (!mergedMap.has(key)) {
              mergedMap.set(key, b);
            }
          }
          const mergedList = Array.from(mergedMap.values());
          setBookings(mergedList);
          saveStoredBookings(mergedList);
          return;
        }
      }
    } catch (e) {
      console.warn("Could not fetch server bookings, using local store:", e);
    }
    setBookings(getStoredBookings());
  };

  // Load all data when authenticated
  const loadAllData = () => {
    setVehicles(getStoredVehicles());
    setDestinations(getStoredDestinations());
    setPackages(getStoredPackages());
    setPricing(getStoredPricing());
    setCompanySettings(getStoredCompanySettings());
    setBlogList(getAllBlogPosts());
    fetchServerBookings();
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadAllData();
      const interval = setInterval(fetchServerBookings, 10000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);


  // Auth Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const strongMasterPass = companySettings?.adminPasscode || "Kuldeep@Travels#3651";

    if (passcode.trim() === strongMasterPass.trim()) {
      setIsAuthenticated(true);
      setAuthError(false);
      sessionStorage.setItem("kt_admin_auth", "true");
      if (rememberMe) {
        localStorage.setItem("kt_admin_auth", "true");
      }
      showToast("Welcome to Kuldeep Travels Admin Panel!", "success");
    } else {
      setAuthError(true);
    }
  };


  const handleLogout = () => {
    sessionStorage.removeItem("kt_admin_auth");
    localStorage.removeItem("kt_admin_auth");
    setIsAuthenticated(false);
    setPasscode("");
  };

  // =========================================================================
  // MODAL STATES & HANDLERS
  // =========================================================================

  // 1. Vehicle Modal
  const [vehicleModalOpen, setVehicleModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<AdminVehicle | null>(null);
  const [vehicleForm, setVehicleForm] = useState<Partial<AdminVehicle>>({});

  const openAddVehicle = () => {
    setEditingVehicle(null);
    setVehicleForm({
      id: "",
      name: "",
      categoryName: "Sedan Class",
      image: "/images/fleet/sedan.png",
      seats: "4 Seats",
      luggage: "2 Bags",
      ac: "Chilled AC",
      price: "₹12/km",
      ratePerKm: 12,
      tag: "Available",
      tagColor: "bg-blue-700",
      vehicleClass: "Prime Compact Sedan",
      fuelType: "CNG / Petrol",
      bestFor: "City and Outstation Travel",
      seatingDetails: "Comfortable ergonomic seats with ample legroom.",
      luggageDetails: "Spacious boot capacity for suitcases and bags.",
      amenities: ["Chilled AC", "Clean Interior", "Mobile Charging", "GPS Safety"],
      idealFor: ["City Sightseeing", "Airport Pick & Drop", "Outstation Trips"],
      highlights: ["Experienced Chauffeur", "Chilled AC", "Zero Waiting"],
      isActive: true,
    });
    setVehicleModalOpen(true);
  };

  const openEditVehicle = (v: AdminVehicle) => {
    setEditingVehicle(v);
    setVehicleForm({ ...v });
    setVehicleModalOpen(true);
  };

  const handleSaveVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicleForm.name?.trim()) {
      alert("Please enter a vehicle name.");
      return;
    }

    const id = editingVehicle ? editingVehicle.id : (vehicleForm.name.trim() || `V_${Date.now()}`);
    const rate = Number(vehicleForm.ratePerKm) || 12;
    const priceStr = vehicleForm.price || `₹${rate}/km`;

    const newVehicle: AdminVehicle = {
      id: id,
      name: vehicleForm.name || "Cab",
      categoryName: vehicleForm.categoryName || "Sedan Class",
      image: vehicleForm.image || "/images/fleet/sedan.png",
      seats: vehicleForm.seats || "4 Seats",
      luggage: vehicleForm.luggage || "2 Bags",
      ac: vehicleForm.ac || "Chilled AC",
      price: priceStr,
      ratePerKm: rate,
      tag: vehicleForm.tag || "Available",
      tagColor: vehicleForm.tagColor || "bg-blue-700",
      vehicleClass: vehicleForm.vehicleClass || "Standard Sedan",
      fuelType: vehicleForm.fuelType || "Petrol / CNG",
      bestFor: vehicleForm.bestFor || "City and Outstation Travel",
      seatingDetails: vehicleForm.seatingDetails || "Spacious seating comfort.",
      luggageDetails: vehicleForm.luggageDetails || "Boot space for bags.",
      amenities: Array.isArray(vehicleForm.amenities) ? vehicleForm.amenities : [],
      idealFor: Array.isArray(vehicleForm.idealFor) ? vehicleForm.idealFor : [],
      highlights: Array.isArray(vehicleForm.highlights) ? vehicleForm.highlights : [],
      isActive: vehicleForm.isActive ?? true,
    };

    let updatedList: AdminVehicle[];
    if (editingVehicle) {
      updatedList = vehicles.map((v) => (v.id === editingVehicle.id ? newVehicle : v));
      showToast(`Updated vehicle "${newVehicle.name}"`, "success");
    } else {
      updatedList = [newVehicle, ...vehicles];
      showToast(`Added new vehicle "${newVehicle.name}"`, "success");
    }

    setVehicles(updatedList);
    saveStoredVehicles(updatedList);
    setVehicleModalOpen(false);
  };

  const handleDeleteVehicle = (id: string, name: string) => {
    if (confirm(`Are you sure you want to remove "${name}" from the fleet?`)) {
      const filtered = vehicles.filter((v) => v.id !== id);
      setVehicles(filtered);
      saveStoredVehicles(filtered);
      showToast(`Vehicle "${name}" deleted.`, "info");
    }
  };

  const handleToggleVehicleActive = (id: string) => {
    const updated = vehicles.map((v) =>
      v.id === id ? { ...v, isActive: !v.isActive } : v
    );
    setVehicles(updated);
    saveStoredVehicles(updated);
    showToast("Vehicle status updated.", "info");
  };

  // 2. Destination Modal
  const [destModalOpen, setDestModalOpen] = useState(false);
  const [editingDest, setEditingDest] = useState<AdminDestination | null>(null);
  const [destForm, setDestForm] = useState<Partial<AdminDestination>>({});

  const openAddDestination = () => {
    setEditingDest(null);
    setDestForm({
      id: "",
      name: "",
      distance: "100 KM from Lucknow",
      distanceKm: 100,
      desc: "City sightseeing and outstation tour destination.",
      startingRate: "Starting ₹2,400 One-Way",
      popularSpots: ["Local Attractions", "City Center"],
      tag: "Popular",
      isFeatured: true,
    });
    setDestModalOpen(true);
  };

  const openEditDestination = (d: AdminDestination) => {
    setEditingDest(d);
    setDestForm({ ...d });
    setDestModalOpen(true);
  };

  const handleSaveDestination = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destForm.name?.trim()) {
      alert("Please enter destination name.");
      return;
    }

    const id = editingDest ? editingDest.id : (destForm.name.toLowerCase().replace(/\s+/g, "-") || `dest_${Date.now()}`);
    const newDest: AdminDestination = {
      id,
      name: destForm.name || "Destination",
      distance: destForm.distance || `${destForm.distanceKm || 100} KM from Lucknow`,
      distanceKm: Number(destForm.distanceKm) || 100,
      desc: destForm.desc || "",
      startingRate: destForm.startingRate || `Starting ₹${(Number(destForm.distanceKm) || 100) * 12} One-Way`,
      popularSpots: Array.isArray(destForm.popularSpots) ? destForm.popularSpots : [],
      tag: destForm.tag || "",
      isFeatured: destForm.isFeatured ?? true,
    };

    let updated: AdminDestination[];
    if (editingDest) {
      updated = destinations.map((d) => (d.id === editingDest.id ? newDest : d));
      showToast(`Updated destination "${newDest.name}"`, "success");
    } else {
      updated = [newDest, ...destinations];
      showToast(`Added destination "${newDest.name}"`, "success");
    }

    setDestinations(updated);
    saveStoredDestinations(updated);
    setDestModalOpen(false);
  };

  const handleDeleteDestination = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete destination "${name}"?`)) {
      const filtered = destinations.filter((d) => d.id !== id);
      setDestinations(filtered);
      saveStoredDestinations(filtered);
      showToast(`Deleted destination "${name}".`, "info");
    }
  };

  // 3. Tour Package Modal
  const [pkgModalOpen, setPkgModalOpen] = useState(false);
  const [editingPkg, setEditingPkg] = useState<AdminTourPackage | null>(null);
  const [pkgForm, setPkgForm] = useState<Partial<AdminTourPackage>>({});

  const openAddPackage = () => {
    setEditingPkg(null);
    setPkgForm({
      id: "",
      name: "",
      subtitle: "Custom Tour Package from Lucknow",
      duration: "1 Day",
      distance: "200 KM Included",
      badge: "Special Tour",
      highlights: ["Doorstep Pickup & Drop", "Dedicated AC Cab", "Chauffeur & Fuel Included"],
      prices: {
        sedan: { original: 4500, discount: 3500 },
        ertiga: { original: 5500, discount: 4500 },
        innovaCrysta: { original: 7500, discount: 6000 },
        tempoTraveller: { original: 12000, discount: 10000 },
      },
      isActive: true,
    });
    setPkgModalOpen(true);
  };

  const openEditPackage = (pkg: AdminTourPackage) => {
    setEditingPkg(pkg);
    setPkgForm({ ...pkg });
    setPkgModalOpen(true);
  };

  const handleSavePackage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pkgForm.name?.trim()) {
      alert("Please enter package name.");
      return;
    }

    const id = editingPkg ? editingPkg.id : (pkgForm.name.toLowerCase().replace(/\s+/g, "-") || `pkg_${Date.now()}`);
    const newPkg: AdminTourPackage = {
      id,
      name: pkgForm.name || "Tour Package",
      subtitle: pkgForm.subtitle || "",
      duration: pkgForm.duration || "1 Day",
      distance: pkgForm.distance || "150 KM",
      badge: pkgForm.badge || "",
      highlights: Array.isArray(pkgForm.highlights) ? pkgForm.highlights : [],
      prices: pkgForm.prices || {
        sedan: { original: 3500, discount: 3000 },
        ertiga: { original: 4500, discount: 4000 },
        innovaCrysta: { original: 6000, discount: 5500 },
        tempoTraveller: { original: 10000, discount: 9000 },
      },
      isActive: pkgForm.isActive ?? true,
    };

    let updated: AdminTourPackage[];
    if (editingPkg) {
      updated = packages.map((p) => (p.id === editingPkg.id ? newPkg : p));
      showToast(`Updated package "${newPkg.name}"`, "success");
    } else {
      updated = [newPkg, ...packages];
      showToast(`Added package "${newPkg.name}"`, "success");
    }

    setPackages(updated);
    saveStoredPackages(updated);
    setPkgModalOpen(false);
  };

  const handleDeletePackage = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete package "${name}"?`)) {
      const filtered = packages.filter((p) => p.id !== id);
      setPackages(filtered);
      saveStoredPackages(filtered);
      showToast(`Package "${name}" removed.`, "info");
    }
  };

  // 4. Booking Status / Assign Driver / Receipt Modals
  const [selectedBooking, setSelectedBooking] = useState<AdminBooking | null>(null);
  const [driverModalOpen, setDriverModalOpen] = useState(false);
  const [driverForm, setDriverForm] = useState({ driverName: "", driverPhone: "", vehicleNumber: "" });

  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentForm, setPaymentForm] = useState<{
    paymentStatus: AdminBooking["paymentStatus"];
    paidAmount: number;
  }>({ paymentStatus: "PENDING", paidAmount: 0 });

  const [invoiceModalOpen, setInvoiceModalOpen] = useState(false);

  // Manual Booking Modal
  const [manualBookingModalOpen, setManualBookingModalOpen] = useState(false);
  const [manualBookingForm, setManualBookingForm] = useState<Partial<AdminBooking>>({
    customerName: "",
    phone: "",
    email: "",
    pickup: "Lucknow",
    drop: "Ayodhya",
    travelDate: new Date().toISOString().split("T")[0],
    travelTime: "08:00 AM",
    passengers: 4,
    serviceType: "One Way",
    vehicle: "Swift Dzire",
    totalFare: 3200,
    paidAmount: 0,
    remainingAmount: 3200,
    paymentStatus: "PENDING",
    bookingStatus: "CONFIRMED",
    paymentMethod: "Cash / UPI to Driver",
    specialNote: "",
  });

  const handleCreateManualBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualBookingForm.customerName || !manualBookingForm.phone) {
      alert("Please enter customer name and contact phone.");
      return;
    }

    const newB = addStoredBooking({
      bookingId: `KT${Date.now().toString().slice(-8)}`,
      customerName: manualBookingForm.customerName || "Customer",
      phone: manualBookingForm.phone || "",
      email: manualBookingForm.email || "",
      pickup: manualBookingForm.pickup || "Lucknow",
      drop: manualBookingForm.drop || "Outstation",
      travelDate: manualBookingForm.travelDate || "",
      travelTime: manualBookingForm.travelTime || "",
      passengers: Number(manualBookingForm.passengers) || 1,
      serviceType: manualBookingForm.serviceType || "One Way",
      vehicle: manualBookingForm.vehicle || "Swift Dzire",
      paymentMethod: manualBookingForm.paymentMethod || "Cash on Arrival",
      paymentStatus: (manualBookingForm.paymentStatus as any) || "PENDING",
      bookingStatus: (manualBookingForm.bookingStatus as any) || "CONFIRMED",
      distance: Number(manualBookingForm.distance) || 120,
      rate: Number(manualBookingForm.rate) || 12,
      baseFare: Number(manualBookingForm.totalFare) || 2500,
      totalFare: Number(manualBookingForm.totalFare) || 2500,
      paidAmount: Number(manualBookingForm.paidAmount) || 0,
      remainingAmount: (Number(manualBookingForm.totalFare) || 2500) - (Number(manualBookingForm.paidAmount) || 0),
      specialNote: manualBookingForm.specialNote || "",
    });

    setBookings(getStoredBookings());
    setManualBookingModalOpen(false);
    showToast(`Manual booking #${newB.bookingId} created!`, "success");
  };

  const handleUpdateBookingStatus = async (id: string, newStatus: AdminBooking["bookingStatus"]) => {
    updateStoredBooking(id, { bookingStatus: newStatus });
    setBookings(getStoredBookings());
    showToast(`Booking #${id} status changed to ${newStatus}`, "success");
    try {
      await fetch("/api/bookings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId: id, bookingStatus: newStatus }),
      });
    } catch (e) {}
  };

  const openDriverAssignModal = (b: AdminBooking) => {
    setSelectedBooking(b);
    setDriverForm({
      driverName: b.driverName || "",
      driverPhone: b.driverPhone || "",
      vehicleNumber: b.vehicleNumber || "",
    });
    setDriverModalOpen(true);
  };

  const handleSaveDriverAssignment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBooking) return;

    updateStoredBooking(selectedBooking.id, {
      driverName: driverForm.driverName,
      driverPhone: driverForm.driverPhone,
      vehicleNumber: driverForm.vehicleNumber,
      bookingStatus: "ASSIGNED",
    });

    setBookings(getStoredBookings());
    setDriverModalOpen(false);
    showToast(`Chauffeur & cab assigned for #${selectedBooking.bookingId}`, "success");

    try {
      await fetch("/api/bookings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingId: selectedBooking.bookingId || selectedBooking.id,
          driverName: driverForm.driverName,
          driverPhone: driverForm.driverPhone,
          vehicleNumber: driverForm.vehicleNumber,
          bookingStatus: "ASSIGNED",
        }),
      });
    } catch (e) {}
  };

  const openPaymentModal = (b: AdminBooking) => {
    setSelectedBooking(b);
    setPaymentForm({
      paymentStatus: b.paymentStatus,
      paidAmount: b.paidAmount || 0,
    });
    setPaymentModalOpen(true);
  };

  const handleSavePaymentUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBooking) return;

    const remaining = Math.max(0, selectedBooking.totalFare - paymentForm.paidAmount);

    updateStoredBooking(selectedBooking.id, {
      paymentStatus: paymentForm.paymentStatus,
      paidAmount: Number(paymentForm.paidAmount) || 0,
      remainingAmount: remaining,
    });

    setBookings(getStoredBookings());
    setPaymentModalOpen(false);
    showToast(`Payment updated for #${selectedBooking.bookingId}`, "success");

    try {
      await fetch("/api/bookings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingId: selectedBooking.bookingId || selectedBooking.id,
          paymentStatus: paymentForm.paymentStatus,
          paidAmount: Number(paymentForm.paidAmount) || 0,
          remainingAmount: remaining,
        }),
      });
    } catch (e) {}
  };

  const handleDeleteBookingItem = async (id: string) => {
    if (confirm(`Are you sure you want to delete booking record #${id}?`)) {
      deleteStoredBooking(id);
      setBookings(getStoredBookings());
      showToast(`Booking #${id} deleted.`, "info");

      try {
        await fetch(`/api/bookings?bookingId=${encodeURIComponent(id)}`, {
          method: "DELETE",
        });
      } catch (e) {}
    }
  };


  // Pricing Form State & Save
  const [pricingDraft, setPricingDraft] = useState<AdminPricingSettings | null>(null);

  useEffect(() => {
    if (pricing) {
      setPricingDraft(JSON.parse(JSON.stringify(pricing)));
    }
  }, [pricing]);

  const handleSavePricingMatrix = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pricingDraft) return;

    saveStoredPricing(pricingDraft);
    setPricing(pricingDraft);
    showToast("Fare calculation rates and add-ons updated successfully!", "success");
  };

  // Company Settings Form & Save
  const [settingsDraft, setSettingsDraft] = useState<AdminCompanySettings | null>(null);

  useEffect(() => {
    if (companySettings) {
      setSettingsDraft(JSON.parse(JSON.stringify(companySettings)));
    }
  }, [companySettings]);

  const handleSaveCompanySettings = (e: React.FormEvent) => {
    e.preventDefault();
    if (!settingsDraft) return;

    saveStoredCompanySettings(settingsDraft);
    setCompanySettings(settingsDraft);
    showToast("Company contact & business settings saved.", "success");
  };

  // Backup and Restore
  const handleExportBackup = () => {
    const fullBackup = {
      timestamp: new Date().toISOString(),
      vehicles,
      destinations,
      packages,
      pricing,
      bookings,
      companySettings,
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullBackup, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `kuldeep_travels_admin_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Complete Admin data backup downloaded!", "success");
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json.vehicles) saveStoredVehicles(json.vehicles);
        if (json.destinations) saveStoredDestinations(json.destinations);
        if (json.packages) saveStoredPackages(json.packages);
        if (json.pricing) saveStoredPricing(json.pricing);
        if (json.bookings) saveStoredBookings(json.bookings);
        if (json.companySettings) saveStoredCompanySettings(json.companySettings);

        loadAllData();
        showToast("Backup restored successfully!", "success");
      } catch (err) {
        alert("Invalid backup file format.");
      }
    };
    reader.readAsText(file);
  };

  const handleFactoryReset = () => {
    if (
      confirm(
        "⚠️ WARNING: This will reset all vehicles, routes, packages, and fares back to factory default data. Are you sure?"
      )
    ) {
      resetAllDataToDefaults();
      loadAllData();
      showToast("All data reset to factory defaults.", "info");
    }
  };

  // Bookings Filter & Search
  const [bookingFilterStatus, setBookingFilterStatus] = useState<string>("ALL");
  const [bookingSearchQuery, setBookingSearchQuery] = useState("");

  const filteredBookings = useMemo(() => {
    return bookings.filter((b) => {
      const matchesStatus =
        bookingFilterStatus === "ALL" || b.bookingStatus === bookingFilterStatus;
      const query = bookingSearchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        b.bookingId.toLowerCase().includes(query) ||
        b.customerName.toLowerCase().includes(query) ||
        b.phone.toLowerCase().includes(query) ||
        b.pickup.toLowerCase().includes(query) ||
        b.drop.toLowerCase().includes(query) ||
        b.vehicle.toLowerCase().includes(query);

      return matchesStatus && matchesQuery;
    });
  }, [bookings, bookingFilterStatus, bookingSearchQuery]);

  // Fleet Filter & Search
  const [fleetCategoryFilter, setFleetCategoryFilter] = useState("ALL");
  const [fleetSearchQuery, setFleetSearchQuery] = useState("");

  const filteredFleet = useMemo(() => {
    return vehicles.filter((v) => {
      const matchesCategory =
        fleetCategoryFilter === "ALL" ||
        v.categoryName.toLowerCase().includes(fleetCategoryFilter.toLowerCase());
      const matchesSearch =
        !fleetSearchQuery ||
        v.name.toLowerCase().includes(fleetSearchQuery.toLowerCase()) ||
        v.vehicleClass.toLowerCase().includes(fleetSearchQuery.toLowerCase()) ||
        v.tag.toLowerCase().includes(fleetSearchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [vehicles, fleetCategoryFilter, fleetSearchQuery]);

  // =========================================================================
  // RENDER: LOGIN GATE IF NOT AUTHENTICATED
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center px-4 py-20 text-white selection:bg-blue-600 selection:text-white">
        <div className="max-w-md w-full rounded-3xl bg-slate-900/90 border border-slate-800 p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
          {/* Top glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Logo & Lock Badge */}
          <div className="text-center relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 border border-blue-400/40 flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-blue-500/20">
              <Shield className="w-8 h-8" />
            </div>

            <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
              Kuldeep Travels
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Admin Portal
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Master control for Car Fleet, Destinations, Tour Packages, Fare Pricing &amp; Bookings.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5 relative z-10">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Enter Admin Passkey
              </label>
              <div className="relative">
                <input
                  type={showPasscode ? "text" : "password"}
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setAuthError(false);
                  }}
                  placeholder="Enter master passcode"
                  className="w-full rounded-xl bg-slate-950/80 border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition pr-11"
                  required
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPasscode(!showPasscode)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs px-1 py-0.5"
                >
                  {showPasscode ? "Hide" : "Show"}
                </button>
              </div>

              {authError && (
                <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-rose-400 bg-rose-950/40 border border-rose-800/50 rounded-lg p-2">
                  <AlertTriangle size={14} className="shrink-0" />
                  <span>Invalid admin passkey. Please check and try again.</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-blue-500"
                />
                <span>Remember on this device</span>
              </label>
              <span className="text-slate-500 text-[11px]">🔐 Secure Authorized Access</span>
            </div>


            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
            >
              <Lock size={16} />
              <span>Unlock Admin Panel</span>
            </button>

            <div className="text-center pt-2">
              <Link
                href="/"
                className="text-xs font-semibold text-slate-400 hover:text-blue-400 transition inline-flex items-center gap-1"
              >
                <span>← Back to Public Website</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // =========================================================================
  // RENDER: MAIN AUTHENTICATED DASHBOARD
  // =========================================================================
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div
            className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-2xl border text-xs sm:text-sm font-bold backdrop-blur-md ${
              toastMessage.type === "success"
                ? "bg-emerald-950/90 text-emerald-200 border-emerald-700/60"
                : toastMessage.type === "error"
                ? "bg-rose-950/90 text-rose-200 border-rose-700/60"
                : "bg-blue-950/90 text-blue-200 border-blue-700/60"
            }`}
          >
            <Sparkles size={16} className="shrink-0 text-amber-400" />
            <span>{toastMessage.text}</span>
          </div>
        </div>
      )}

      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-slate-900/90 border-b border-slate-800/80 backdrop-blur-md px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <Menu size={18} />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md font-black text-sm">
              KT
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-base leading-tight">
                  Kuldeep Travels
                </span>
                <span className="hidden sm:inline-flex rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider">
                  Admin Portal
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-none mt-0.5">
                Master Cab &amp; Booking Management System
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 px-3 py-1.5 text-xs font-bold text-slate-200 transition"
          >
            <span>Live Website</span>
            <ExternalLink size={13} />
          </Link>

          <button
            type="button"
            onClick={openAddVehicle}
            className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 px-3.5 py-1.5 text-xs font-bold text-white shadow-md shadow-blue-600/20 transition cursor-pointer"
          >
            <Plus size={15} />
            <span className="hidden sm:inline">Add Vehicle</span>
            <span className="sm:hidden">Car</span>
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-rose-950/60 hover:border-rose-800 hover:text-rose-300 px-3 py-1.5 text-xs font-bold text-slate-300 transition cursor-pointer"
            title="Logout"
          >
            <LogOut size={14} />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Admin Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Nav */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between transition-transform duration-200 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="p-4 space-y-1.5 overflow-y-auto">
            <div className="px-3 py-2 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              Management Modules
            </div>

            <button
              type="button"
              onClick={() => {
                setActiveTab("dashboard");
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "dashboard"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Layers size={16} />
                <span>Overview Dashboard</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("fleet");
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "fleet"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Car size={16} />
                <span>Fleet &amp; Cars</span>
              </div>
              <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-300">
                {vehicles.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("destinations");
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "destinations"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <MapPin size={16} />
                <span>Destinations &amp; Routes</span>
              </div>
              <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-300">
                {destinations.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("packages");
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "packages"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Package size={16} />
                <span>Tour Packages</span>
              </div>
              <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-300">
                {packages.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("pricing");
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "pricing"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <CircleDollarSign size={16} />
                <span>Fare Rates &amp; Pricing</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("bookings");
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "bookings"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <CalendarCheck size={16} />
                <span>Bookings &amp; Leads CRM</span>
              </div>
              <span className="rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-black">
                {bookings.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("blogs");
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "blogs"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <BookOpen size={16} />
                <span>Blog Articles</span>
              </div>
              <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-300">
                {blogList.length}
              </span>
            </button>

            <div className="pt-3 px-3 py-2 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              System Settings
            </div>

            <button
              type="button"
              onClick={() => {
                setActiveTab("settings");
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "settings"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Settings size={16} />
                <span>Company &amp; Backup</span>
              </div>
            </button>
          </div>

          {/* Quick System Info Bottom Strip */}
          <div className="p-4 border-t border-slate-800 text-[11px] text-slate-400 space-y-2 bg-slate-950/40">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Live Status:</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Online &amp; Synced
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Database Engine:</span>
              <span className="font-semibold text-slate-300">Active Storage Layer</span>
            </div>
          </div>
        </aside>

        {/* Backdrop for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/60 lg:hidden backdrop-blur-xs"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content Workspace */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-slate-950">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* =========================================================
                TAB 1: OVERVIEW DASHBOARD
            ========================================================== */}
            {activeTab === "dashboard" && (
              <div className="space-y-8 animate-in fade-in duration-200">
                {/* Greeting & Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Executive Overview
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Welcome back! Here is your real-time fleet, destination, and booking summary.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setManualBookingModalOpen(true)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-md transition cursor-pointer"
                    >
                      <Plus size={16} />
                      <span>New Booking</span>
                    </button>
                    <button
                      type="button"
                      onClick={openAddVehicle}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-md transition cursor-pointer"
                    >
                      <Plus size={16} />
                      <span>Add Car</span>
                    </button>
                  </div>
                </div>

                {/* KPI Metrics Strip */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-sm hover:border-slate-700 transition">
                    <div className="flex items-center justify-between text-blue-400 mb-2">
                      <Car size={20} />
                      <span className="text-[10px] uppercase font-bold text-slate-500">Fleet</span>
                    </div>
                    <p className="text-2xl font-black text-white">{vehicles.length}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {vehicles.filter((v) => v.isActive !== false).length} Active Cabs
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-sm hover:border-slate-700 transition">
                    <div className="flex items-center justify-between text-indigo-400 mb-2">
                      <MapPin size={20} />
                      <span className="text-[10px] uppercase font-bold text-slate-500">Routes</span>
                    </div>
                    <p className="text-2xl font-black text-white">{destinations.length}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Covered Cities</p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-sm hover:border-slate-700 transition">
                    <div className="flex items-center justify-between text-cyan-400 mb-2">
                      <Package size={20} />
                      <span className="text-[10px] uppercase font-bold text-slate-500">Tours</span>
                    </div>
                    <p className="text-2xl font-black text-white">{packages.length}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Active Packages</p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-sm hover:border-slate-700 transition">
                    <div className="flex items-center justify-between text-emerald-400 mb-2">
                      <CalendarCheck size={20} />
                      <span className="text-[10px] uppercase font-bold text-slate-500">Bookings</span>
                    </div>
                    <p className="text-2xl font-black text-white">{bookings.length}</p>
                    <p className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                      {bookings.filter((b) => b.bookingStatus === "CONFIRMED" || b.bookingStatus === "ASSIGNED").length} In Progress
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-sm hover:border-slate-700 transition">
                    <div className="flex items-center justify-between text-amber-400 mb-2">
                      <DollarSign size={20} />
                      <span className="text-[10px] uppercase font-bold text-slate-500">Revenue</span>
                    </div>
                    <p className="text-2xl font-black text-white">
                      ₹
                      {bookings
                        .reduce((sum, b) => sum + (b.totalFare || 0), 0)
                        .toLocaleString("en-IN")}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Total Booked Volume</p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-sm hover:border-slate-700 transition">
                    <div className="flex items-center justify-between text-purple-400 mb-2">
                      <BookOpen size={20} />
                      <span className="text-[10px] uppercase font-bold text-slate-500">Blogs</span>
                    </div>
                    <p className="text-2xl font-black text-white">{blogList.length}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Published Articles</p>
                  </div>
                </div>

                {/* Quick Action Matrix */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-300 mb-3.5 flex items-center gap-2">
                    <Sparkles size={16} className="text-amber-400" />
                    <span>Quick Administration Actions</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    <button
                      type="button"
                      onClick={openAddVehicle}
                      className="p-3 rounded-xl border border-slate-800 bg-slate-800/60 hover:bg-slate-700/80 text-left transition cursor-pointer"
                    >
                      <Car size={18} className="text-blue-400 mb-1.5" />
                      <p className="text-xs font-bold text-white">Add New Car</p>
                      <p className="text-[10px] text-slate-400">Configure specs &amp; rate</p>
                    </button>

                    <button
                      type="button"
                      onClick={openAddDestination}
                      className="p-3 rounded-xl border border-slate-800 bg-slate-800/60 hover:bg-slate-700/80 text-left transition cursor-pointer"
                    >
                      <MapPin size={18} className="text-indigo-400 mb-1.5" />
                      <p className="text-xs font-bold text-white">Add Destination</p>
                      <p className="text-[10px] text-slate-400">Add new tourist route</p>
                    </button>

                    <button
                      type="button"
                      onClick={openAddPackage}
                      className="p-3 rounded-xl border border-slate-800 bg-slate-800/60 hover:bg-slate-700/80 text-left transition cursor-pointer"
                    >
                      <Package size={18} className="text-cyan-400 mb-1.5" />
                      <p className="text-xs font-bold text-white">Add Tour Package</p>
                      <p className="text-[10px] text-slate-400">Create multi-day package</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("pricing")}
                      className="p-3 rounded-xl border border-slate-800 bg-slate-800/60 hover:bg-slate-700/80 text-left transition cursor-pointer"
                    >
                      <CircleDollarSign size={18} className="text-amber-400 mb-1.5" />
                      <p className="text-xs font-bold text-white">Edit Per-KM Rates</p>
                      <p className="text-[10px] text-slate-400">Modify base pricing</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setManualBookingModalOpen(true)}
                      className="p-3 rounded-xl border border-slate-800 bg-slate-800/60 hover:bg-slate-700/80 text-left transition cursor-pointer"
                    >
                      <CalendarCheck size={18} className="text-emerald-400 mb-1.5" />
                      <p className="text-xs font-bold text-white">Offline Booking</p>
                      <p className="text-[10px] text-slate-400">Log phone/walk-in trip</p>
                    </button>

                    <Link
                      href="/admin/create-blog"
                      className="p-3 rounded-xl border border-slate-800 bg-slate-800/60 hover:bg-slate-700/80 text-left transition"
                    >
                      <BookOpen size={18} className="text-purple-400 mb-1.5" />
                      <p className="text-xs font-bold text-white">Write Blog</p>
                      <p className="text-[10px] text-slate-400">Create SEO article</p>
                    </Link>
                  </div>
                </div>

                {/* Recent Bookings Live Feed */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden">
                  <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white">Recent Customer Bookings</h3>
                      <p className="text-xs text-slate-400">Live booking inquiries and payments</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab("bookings")}
                      className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>View All ({bookings.length})</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-300">
                      <thead className="bg-slate-950/60 text-[11px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800">
                        <tr>
                          <th className="px-4 py-3">Booking ID</th>
                          <th className="px-4 py-3">Customer</th>
                          <th className="px-4 py-3">Route (Pickup → Drop)</th>
                          <th className="px-4 py-3">Vehicle</th>
                          <th className="px-4 py-3">Date &amp; Time</th>
                          <th className="px-4 py-3">Total Fare</th>
                          <th className="px-4 py-3">Status</th>
                          <th className="px-4 py-3 text-right">Quick Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {bookings.slice(0, 5).map((b) => (
                          <tr key={b.id} className="hover:bg-slate-800/40 transition">
                            <td className="px-4 py-3 font-mono font-bold text-blue-400">
                              {b.bookingId}
                            </td>
                            <td className="px-4 py-3">
                              <p className="font-bold text-white">{b.customerName}</p>
                              <p className="text-[11px] text-slate-400">{b.phone}</p>
                            </td>
                            <td className="px-4 py-3">
                              <p className="font-semibold text-slate-200 truncate max-w-[200px]">
                                {b.pickup} → {b.drop}
                              </p>
                              <span className="text-[10px] text-slate-500">{b.serviceType}</span>
                            </td>
                            <td className="px-4 py-3 font-semibold text-slate-300">{b.vehicle}</td>
                            <td className="px-4 py-3">
                              <p className="font-medium text-slate-200">{b.travelDate}</p>
                              <p className="text-[11px] text-slate-400">{b.travelTime}</p>
                            </td>
                            <td className="px-4 py-3 font-bold text-emerald-400">
                              ₹{b.totalFare?.toLocaleString("en-IN")}
                            </td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                                  b.bookingStatus === "CONFIRMED"
                                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                    : b.bookingStatus === "ASSIGNED"
                                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                    : b.bookingStatus === "COMPLETED"
                                    ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                                    : b.bookingStatus === "CANCELLED"
                                    ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                                    : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                                }`}
                              >
                                {b.bookingStatus}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-right">
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedBooking(b);
                                  setInvoiceModalOpen(true);
                                }}
                                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-bold text-slate-200 transition cursor-pointer"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================
                TAB 2: FLEET & CARS MANAGEMENT
            ========================================================== */}
            {activeTab === "fleet" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* Fleet Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                      <Car size={24} className="text-blue-500" />
                      <span>Car Fleet &amp; Vehicle Manager</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Add new cars, update rates per KM, modify seating &amp; luggage specs, and toggle availability.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={openAddVehicle}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition cursor-pointer"
                  >
                    <Plus size={16} />
                    <span>Add New Vehicle</span>
                  </button>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
                  <div className="relative flex-1 max-w-md">
                    <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={fleetSearchQuery}
                      onChange={(e) => setFleetSearchQuery(e.target.value)}
                      placeholder="Search car by name, tag, or category..."
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                    {["ALL", "Sedan", "MUV", "SUV", "Luxury", "Van", "Coach"].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFleetCategoryFilter(cat)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                          fleetCategoryFilter === cat
                            ? "bg-blue-600 text-white"
                            : "bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-white"
                        }`}
                      >
                        {cat === "ALL" ? "All Types" : cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fleet Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredFleet.map((vehicle) => (
                    <div
                      key={vehicle.id}
                      className={`rounded-2xl border overflow-hidden transition flex flex-col justify-between ${
                        vehicle.isActive !== false
                          ? "border-slate-800 bg-slate-900/90 shadow-sm hover:border-slate-700"
                          : "border-slate-800/40 bg-slate-950/70 opacity-60"
                      }`}
                    >
                      <div>
                        {/* Image & Badges */}
                        <div className="relative h-44 w-full bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center p-3 border-b border-slate-800">
                          <Image
                            src={vehicle.image}
                            alt={vehicle.name}
                            fill
                            className="object-contain p-2"
                          />
                          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                            <span
                              className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white shadow ${
                                vehicle.tagColor || "bg-slate-800"
                              }`}
                            >
                              {vehicle.tag || "Cab"}
                            </span>
                            {vehicle.isActive === false && (
                              <span className="rounded-full bg-rose-600 px-2 py-0.5 text-[10px] font-bold text-white">
                                Inactive
                              </span>
                            )}
                          </div>

                          <span className="absolute top-3 right-3 rounded-full bg-amber-400 px-2.5 py-0.5 text-xs font-black text-slate-950 shadow">
                            ₹{vehicle.ratePerKm || 12}/km
                          </span>
                        </div>

                        {/* Details */}
                        <div className="p-4 sm:p-5 space-y-3">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className="font-extrabold text-white text-base sm:text-lg">
                                {vehicle.name}
                              </h3>
                              <p className="text-xs text-blue-400 font-semibold">
                                {vehicle.vehicleClass} • {vehicle.fuelType}
                              </p>
                            </div>
                          </div>

                          {/* Quick specs pill row */}
                          <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
                            <div className="bg-slate-950/80 rounded-lg p-2 border border-slate-800">
                              <Users size={13} className="text-blue-400 mx-auto mb-1" />
                              <span className="text-[11px] font-bold text-slate-300">{vehicle.seats}</span>
                            </div>
                            <div className="bg-slate-950/80 rounded-lg p-2 border border-slate-800">
                              <Briefcase size={13} className="text-amber-400 mx-auto mb-1" />
                              <span className="text-[11px] font-bold text-slate-300">{vehicle.luggage}</span>
                            </div>
                            <div className="bg-slate-950/80 rounded-lg p-2 border border-slate-800">
                              <Snowflake size={13} className="text-cyan-400 mx-auto mb-1" />
                              <span className="text-[11px] font-bold text-slate-300">{vehicle.ac}</span>
                            </div>
                          </div>

                          <p className="text-xs text-slate-400 line-clamp-2">
                            ✨ <span className="text-slate-300 font-medium">{vehicle.bestFor}</span>
                          </p>

                          <div className="text-[11px] text-slate-500 flex flex-wrap gap-1">
                            {vehicle.amenities?.slice(0, 3).map((item, idx) => (
                              <span key={idx} className="bg-slate-800 px-2 py-0.5 rounded-md text-slate-300">
                                ✓ {item}
                              </span>
                            ))}
                            {(vehicle.amenities?.length || 0) > 3 && (
                              <span className="bg-slate-800 px-2 py-0.5 rounded-md text-slate-400">
                                +{(vehicle.amenities?.length || 0) - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="p-4 pt-0 border-t border-slate-800/60 mt-3 pt-3 flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => handleToggleVehicleActive(vehicle.id)}
                          className={`text-xs font-bold px-2.5 py-1.5 rounded-xl border transition cursor-pointer ${
                            vehicle.isActive !== false
                              ? "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
                              : "bg-emerald-950 text-emerald-300 border-emerald-800 hover:bg-emerald-900"
                          }`}
                        >
                          {vehicle.isActive !== false ? "Hide on Site" : "Activate"}
                        </button>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => openEditVehicle(vehicle)}
                            className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-600/30 hover:bg-blue-600 hover:text-white transition cursor-pointer"
                            title="Edit Vehicle"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteVehicle(vehicle.id, vehicle.name)}
                            className="p-2 rounded-xl bg-rose-600/20 text-rose-400 border border-rose-600/30 hover:bg-rose-600 hover:text-white transition cursor-pointer"
                            title="Delete Vehicle"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* =========================================================
                TAB 3: DESTINATIONS & ROUTES MANAGEMENT
            ========================================================== */}
            {activeTab === "destinations" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                      <MapPin size={24} className="text-indigo-500" />
                      <span>Destinations &amp; Tourist Routes</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Manage covered travel destinations, round-trip distances, starting rates, and tourist highlights.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={openAddDestination}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition cursor-pointer"
                  >
                    <Plus size={16} />
                    <span>Add Destination</span>
                  </button>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {destinations.map((dest) => (
                    <div
                      key={dest.id}
                      className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-sm flex flex-col justify-between hover:border-slate-700 transition"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                              {dest.tag || "Covered Destination"}
                            </span>
                            <h3 className="text-lg font-bold text-white mt-0.5">{dest.name}</h3>
                          </div>
                          <span className="rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 px-2.5 py-0.5 text-xs font-bold">
                            {dest.distanceKm} KM
                          </span>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed">{dest.desc}</p>

                        <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800/80">
                          <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                            Popular Attractions
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {dest.popularSpots?.map((spot, idx) => (
                              <span
                                key={idx}
                                className="bg-slate-800 text-slate-300 text-[11px] px-2 py-0.5 rounded-md"
                              >
                                {spot}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="text-xs font-black text-amber-400">
                          {dest.startingRate}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                        <span className="text-[11px] text-slate-500 font-medium">
                          {dest.isFeatured ? "★ Featured on Website" : "Standard Route"}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => openEditDestination(dest)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                            title="Edit Destination"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteDestination(dest.id, dest.name)}
                            className="p-1.5 rounded-lg bg-rose-600/20 text-rose-400 hover:bg-rose-600 hover:text-white transition cursor-pointer"
                            title="Delete Destination"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* =========================================================
                TAB 4: TOUR PACKAGES MANAGEMENT
            ========================================================== */}
            {activeTab === "packages" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                      <Package size={24} className="text-cyan-500" />
                      <span>Tour Packages &amp; Pilgrimages</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Configure full day tours, outstation round trips, and multi-vehicle package rates.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={openAddPackage}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition cursor-pointer"
                  >
                    <Plus size={16} />
                    <span>Add Tour Package</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-sm flex flex-col justify-between hover:border-slate-700 transition"
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            {pkg.badge && (
                              <span className="rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider inline-block mb-1">
                                {pkg.badge}
                              </span>
                            )}
                            <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                            <p className="text-xs text-slate-400">{pkg.subtitle}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-bold text-slate-300 block">{pkg.duration}</span>
                            <span className="text-[11px] text-slate-500">{pkg.distance}</span>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                            Key Itinerary Highlights
                          </span>
                          <ul className="space-y-1 text-xs text-slate-300">
                            {pkg.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-cyan-400 font-bold shrink-0">•</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Price Matrix */}
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                            Package Rates by Vehicle
                          </span>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 text-center text-xs">
                            <div className="bg-slate-800/80 rounded-lg p-2 border border-slate-700/60">
                              <span className="text-[10px] text-slate-400 block font-bold">Sedan</span>
                              <span className="text-xs font-extrabold text-emerald-400">
                                ₹{pkg.prices.sedan?.discount?.toLocaleString("en-IN")}
                              </span>
                            </div>
                            <div className="bg-slate-800/80 rounded-lg p-2 border border-slate-700/60">
                              <span className="text-[10px] text-slate-400 block font-bold">Ertiga</span>
                              <span className="text-xs font-extrabold text-emerald-400">
                                ₹{pkg.prices.ertiga?.discount?.toLocaleString("en-IN")}
                              </span>
                            </div>
                            <div className="bg-slate-800/80 rounded-lg p-2 border border-slate-700/60">
                              <span className="text-[10px] text-slate-400 block font-bold">Innova Crysta</span>
                              <span className="text-xs font-extrabold text-emerald-400">
                                ₹{pkg.prices.innovaCrysta?.discount?.toLocaleString("en-IN")}
                              </span>
                            </div>
                            {pkg.prices.tempoTraveller && (
                              <div className="bg-slate-800/80 rounded-lg p-2 border border-slate-700/60">
                                <span className="text-[10px] text-slate-400 block font-bold">Tempo</span>
                                <span className="text-xs font-extrabold text-emerald-400">
                                  ₹{pkg.prices.tempoTraveller?.discount?.toLocaleString("en-IN")}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => openEditPackage(pkg)}
                          className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition cursor-pointer flex items-center gap-1"
                        >
                          <Edit2 size={13} />
                          <span>Edit</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeletePackage(pkg.id, pkg.name)}
                          className="px-3 py-1.5 rounded-xl bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-xs font-bold transition cursor-pointer flex items-center gap-1"
                        >
                          <Trash2 size={13} />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* =========================================================
                TAB 5: FARE RATES & PRICING RULES
            ========================================================== */}
            {activeTab === "pricing" && pricingDraft && (
              <form onSubmit={handleSavePricingMatrix} className="space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                      <CircleDollarSign size={24} className="text-amber-400" />
                      <span>Fare Calculation Rates &amp; Add-on Matrix</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Modify default base per-KM charges, advance payment percentage, and optional add-on service rates.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition cursor-pointer"
                  >
                    <Check size={16} />
                    <span>Save Rate Changes</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Vehicle Per-KM Rates Table */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-4">
                    <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                      <Car size={18} className="text-blue-400" />
                      <span>Base Rate Per KM (by Vehicle)</span>
                    </h3>
                    <div className="space-y-2.5">
                      {Object.keys(pricingDraft.vehicleRates).map((vehName) => (
                        <div
                          key={vehName}
                          className="flex items-center justify-between gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800"
                        >
                          <span className="text-xs sm:text-sm font-bold text-slate-200">{vehName}</span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-slate-400 font-bold text-xs">₹</span>
                            <input
                              type="number"
                              value={pricingDraft.vehicleRates[vehName]}
                              onChange={(e) => {
                                const val = Number(e.target.value) || 0;
                                setPricingDraft({
                                  ...pricingDraft,
                                  vehicleRates: {
                                    ...pricingDraft.vehicleRates,
                                    [vehName]: val,
                                  },
                                });
                              }}
                              className="w-20 rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-1 text-xs font-bold text-emerald-400 text-right focus:outline-none focus:border-blue-500"
                            />
                            <span className="text-slate-400 text-xs">/ km</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add-ons & Policy Matrix */}
                  <div className="space-y-6">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-4">
                      <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                        <Sparkles size={18} className="text-amber-400" />
                        <span>Optional Add-on Service Rates</span>
                      </h3>
                      <div className="space-y-2.5">
                        {Object.keys(pricingDraft.extraPrices).map((extraName) => (
                          <div
                            key={extraName}
                            className="flex items-center justify-between gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800"
                          >
                            <span className="text-xs sm:text-sm font-bold text-slate-200">
                              {extraName}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <span className="text-slate-400 font-bold text-xs">₹</span>
                              <input
                                type="number"
                                value={pricingDraft.extraPrices[extraName]}
                                onChange={(e) => {
                                  const val = Number(e.target.value) || 0;
                                  setPricingDraft({
                                    ...pricingDraft,
                                    extraPrices: {
                                      ...pricingDraft.extraPrices,
                                      [extraName]: val,
                                    },
                                  });
                                }}
                                className="w-24 rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-1 text-xs font-bold text-amber-400 text-right focus:outline-none focus:border-blue-500"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-4">
                      <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                        <Settings size={18} className="text-cyan-400" />
                        <span>Advance &amp; Allowance Rules</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                          <label className="text-xs font-bold text-slate-300 block mb-1">
                            Online Advance Required (%)
                          </label>
                          <input
                            type="number"
                            value={pricingDraft.advancePercentage}
                            onChange={(e) =>
                              setPricingDraft({
                                ...pricingDraft,
                                advancePercentage: Number(e.target.value) || 20,
                              })
                            }
                            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs font-bold text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                          <label className="text-xs font-bold text-slate-300 block mb-1">
                            GST Percentage (%)
                          </label>
                          <input
                            type="number"
                            value={pricingDraft.gstPercentage}
                            onChange={(e) =>
                              setPricingDraft({
                                ...pricingDraft,
                                gstPercentage: Number(e.target.value) || 0,
                              })
                            }
                            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs font-bold text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                          <label className="text-xs font-bold text-slate-300 block mb-1">
                            Driver Allowance / Day (₹)
                          </label>
                          <input
                            type="number"
                            value={pricingDraft.driverAllowancePerDay}
                            onChange={(e) =>
                              setPricingDraft({
                                ...pricingDraft,
                                driverAllowancePerDay: Number(e.target.value) || 400,
                              })
                            }
                            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs font-bold text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                          <label className="text-xs font-bold text-slate-300 block mb-1">
                            Night Charge (₹)
                          </label>
                          <input
                            type="number"
                            value={pricingDraft.nightAllowance}
                            onChange={(e) =>
                              setPricingDraft({
                                ...pricingDraft,
                                nightAllowance: Number(e.target.value) || 300,
                              })
                            }
                            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs font-bold text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}

            {/* =========================================================
                TAB 6: BOOKINGS & LEADS CRM
            ========================================================== */}
            {activeTab === "bookings" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                      <CalendarCheck size={24} className="text-emerald-500" />
                      <span>Bookings &amp; Customer CRM</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Manage real-time customer trip requests, assign drivers &amp; cabs, and update payment milestones.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setManualBookingModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition cursor-pointer"
                  >
                    <Plus size={16} />
                    <span>Create Manual Trip</span>
                  </button>
                </div>

                {/* Filter & Search Bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
                  <div className="relative flex-1 max-w-md">
                    <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={bookingSearchQuery}
                      onChange={(e) => setBookingSearchQuery(e.target.value)}
                      placeholder="Search by customer, phone, booking ID, location..."
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                    {["ALL", "PENDING", "CONFIRMED", "ASSIGNED", "COMPLETED", "CANCELLED"].map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => setBookingFilterStatus(status)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                          bookingFilterStatus === status
                            ? "bg-blue-600 text-white"
                            : "bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-white"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bookings Table */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-300">
                      <thead className="bg-slate-950/80 text-[11px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800">
                        <tr>
                          <th className="px-4 py-3.5">ID / Customer</th>
                          <th className="px-4 py-3.5">Route &amp; Travel Date</th>
                          <th className="px-4 py-3.5">Cab Selected</th>
                          <th className="px-4 py-3.5">Fare &amp; Payment</th>
                          <th className="px-4 py-3.5">Trip Status</th>
                          <th className="px-4 py-3.5">Assigned Driver</th>
                          <th className="px-4 py-3.5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {filteredBookings.length === 0 ? (
                          <tr>
                            <td colSpan={7} className="px-4 py-8 text-center text-slate-500 text-xs">
                              No bookings found matching your search filter.
                            </td>
                          </tr>
                        ) : (
                          filteredBookings.map((b) => (
                            <tr key={b.id} className="hover:bg-slate-800/40 transition">
                              <td className="px-4 py-3.5">
                                <span className="font-mono font-bold text-blue-400 block">
                                  #{b.bookingId}
                                </span>
                                <span className="font-bold text-white text-xs sm:text-sm block mt-0.5">
                                  {b.customerName}
                                </span>
                                <div className="flex items-center gap-2 mt-1">
                                  <a
                                    href={`tel:${b.phone}`}
                                    className="text-[11px] text-slate-400 hover:text-blue-300 inline-flex items-center gap-1"
                                  >
                                    <Phone size={10} />
                                    {b.phone}
                                  </a>
                                  <a
                                    href={`https://wa.me/${b.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                                      `Hello ${b.customerName}, this is regarding your Kuldeep Travels booking #${b.bookingId} (${b.pickup} to ${b.drop}).`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-400 hover:text-emerald-300"
                                    title="WhatsApp Customer"
                                  >
                                    <MessageCircle size={12} />
                                  </a>
                                </div>
                              </td>

                              <td className="px-4 py-3.5">
                                <p className="font-bold text-slate-200 text-xs">
                                  {b.pickup} → {b.drop}
                                </p>
                                <p className="text-[11px] text-slate-400 mt-0.5">
                                  📅 {b.travelDate} at {b.travelTime}
                                </p>
                                <span className="inline-block mt-1 bg-slate-800 px-2 py-0.5 rounded text-[10px] text-slate-300">
                                  {b.serviceType} • {b.passengers} Pax
                                </span>
                              </td>

                              <td className="px-4 py-3.5">
                                <span className="font-bold text-white block">{b.vehicle}</span>
                                <span className="text-[11px] text-slate-400">{b.distance} KM est.</span>
                              </td>

                              <td className="px-4 py-3.5">
                                <span className="font-extrabold text-emerald-400 text-sm block">
                                  ₹{b.totalFare?.toLocaleString("en-IN")}
                                </span>
                                <span
                                  className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold ${
                                    b.paymentStatus === "PAID"
                                      ? "bg-emerald-500/20 text-emerald-300"
                                      : b.paymentStatus === "ADVANCE_PAID"
                                      ? "bg-blue-500/20 text-blue-300"
                                      : "bg-amber-500/20 text-amber-300"
                                  }`}
                                >
                                  {b.paymentStatus}
                                </span>
                                {b.paidAmount > 0 && (
                                  <span className="text-[10px] text-slate-400 block mt-0.5">
                                    Paid: ₹{b.paidAmount} (Bal: ₹{b.remainingAmount})
                                  </span>
                                )}
                              </td>

                              <td className="px-4 py-3.5">
                                <select
                                  value={b.bookingStatus}
                                  onChange={(e) =>
                                    handleUpdateBookingStatus(b.id, e.target.value as any)
                                  }
                                  className="rounded-lg bg-slate-950 border border-slate-700 px-2.5 py-1 text-xs font-bold text-white focus:outline-none focus:border-blue-500 cursor-pointer"
                                >
                                  <option value="PENDING">PENDING</option>
                                  <option value="CONFIRMED">CONFIRMED</option>
                                  <option value="ASSIGNED">ASSIGNED</option>
                                  <option value="COMPLETED">COMPLETED</option>
                                  <option value="CANCELLED">CANCELLED</option>
                                </select>
                              </td>

                              <td className="px-4 py-3.5">
                                {b.driverName ? (
                                  <div>
                                    <span className="font-bold text-white block">{b.driverName}</span>
                                    <span className="text-[11px] text-slate-400">{b.driverPhone}</span>
                                    <span className="text-[10px] text-blue-400 font-mono block">
                                      {b.vehicleNumber}
                                    </span>
                                  </div>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() => openDriverAssignModal(b)}
                                    className="px-2.5 py-1 rounded-lg border border-dashed border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-[11px] font-bold text-blue-400 hover:text-blue-300 transition cursor-pointer"
                                  >
                                    + Assign Driver
                                  </button>
                                )}
                              </td>

                              <td className="px-4 py-3.5 text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <button
                                    type="button"
                                    onClick={() => openDriverAssignModal(b)}
                                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                                    title="Assign / Reassign Chauffeur"
                                  >
                                    <UserCheck size={14} />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => openPaymentModal(b)}
                                    className="p-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-600/30 hover:bg-emerald-600 hover:text-white transition cursor-pointer"
                                    title="Update Payment Milestone"
                                  >
                                    <DollarSign size={14} />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setSelectedBooking(b);
                                      setInvoiceModalOpen(true);
                                    }}
                                    className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-600/30 hover:bg-blue-600 hover:text-white transition cursor-pointer"
                                    title="View Full Booking Invoice"
                                  >
                                    <Eye size={14} />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteBookingItem(b.id)}
                                    className="p-1.5 rounded-lg bg-rose-600/20 text-rose-400 border border-rose-600/30 hover:bg-rose-600 hover:text-white transition cursor-pointer"
                                    title="Delete Booking Record"
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================
                TAB 7: BLOG ARTICLES MANAGEMENT
            ========================================================== */}
            {activeTab === "blogs" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                      <BookOpen size={24} className="text-purple-400" />
                      <span>Blog Articles &amp; Travel Guides</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Publish tourist guides, road trip recommendations, and route tips for Kuldeep Travels.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href="/admin/blogs"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-200 transition"
                    >
                      <span>Manage All Blogs</span>
                    </Link>
                    <Link
                      href="/admin/create-blog"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition"
                    >
                      <Plus size={16} />
                      <span>Write New Blog</span>
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {blogList.map((post) => (
                    <div
                      key={post.slug}
                      className="rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-sm flex flex-col justify-between hover:border-slate-700 transition"
                    >
                      <div>
                        <div className="relative h-44 w-full bg-slate-950">
                          <Image
                            src={post.coverImage || "/images/fleet/sedan.png"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                          <span className="absolute top-3 left-3 rounded-full bg-purple-900/80 backdrop-blur px-2.5 py-0.5 text-[10px] font-bold text-white">
                            {post.category}
                          </span>
                        </div>

                        <div className="p-4 sm:p-5 space-y-2">
                          <div className="flex items-center gap-2 text-[11px] text-slate-400">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="font-bold text-white text-base leading-snug line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-xs text-slate-400 line-clamp-2">{post.excerpt}</p>
                        </div>
                      </div>

                      <div className="p-4 pt-0 border-t border-slate-800 mt-2 pt-3 flex items-center justify-between">
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                        >
                          <span>Read Article</span>
                          <ExternalLink size={12} />
                        </Link>

                        <button
                          type="button"
                          onClick={() => {
                            if (confirm(`Delete blog "${post.title}"?`)) {
                              deleteCustomBlogPost(post.slug);
                              setBlogList(getAllBlogPosts());
                              showToast(`Deleted blog "${post.title}"`, "info");
                            }
                          }}
                          className="p-1.5 rounded-lg bg-rose-600/20 text-rose-400 hover:bg-rose-600 hover:text-white transition cursor-pointer"
                          title="Delete Blog Post"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* =========================================================
                TAB 8: COMPANY SETTINGS & BACKUP
            ========================================================== */}
            {activeTab === "settings" && settingsDraft && (
              <form onSubmit={handleSaveCompanySettings} className="space-y-8 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                      <Settings size={24} className="text-blue-500" />
                      <span>Company Contact &amp; System Settings</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Update official phone numbers, WhatsApp, branch addresses, and download data backups.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition cursor-pointer"
                  >
                    <Check size={16} />
                    <span>Save Business Settings</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Contact Info */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-4">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Phone size={18} className="text-blue-400" />
                      <span>Contact &amp; Emergency Phone Numbers</span>
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1">
                          Company Legal Name
                        </label>
                        <input
                          type="text"
                          value={settingsDraft.companyName}
                          onChange={(e) =>
                            setSettingsDraft({ ...settingsDraft, companyName: e.target.value })
                          }
                          className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1">
                            Primary Phone Number
                          </label>
                          <input
                            type="text"
                            value={settingsDraft.phone1}
                            onChange={(e) =>
                              setSettingsDraft({ ...settingsDraft, phone1: e.target.value })
                            }
                            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1">
                            Secondary Phone Number
                          </label>
                          <input
                            type="text"
                            value={settingsDraft.phone2}
                            onChange={(e) =>
                              setSettingsDraft({ ...settingsDraft, phone2: e.target.value })
                            }
                            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1">
                            WhatsApp Helpline Number
                          </label>
                          <input
                            type="text"
                            value={settingsDraft.whatsapp}
                            onChange={(e) =>
                              setSettingsDraft({ ...settingsDraft, whatsapp: e.target.value })
                            }
                            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1">
                            Official Email Address
                          </label>
                          <input
                            type="email"
                            value={settingsDraft.email}
                            onChange={(e) =>
                              setSettingsDraft({ ...settingsDraft, email: e.target.value })
                            }
                            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1">
                          UPI ID for Direct Payments
                        </label>
                        <input
                          type="text"
                          value={settingsDraft.upiId}
                          onChange={(e) =>
                            setSettingsDraft({ ...settingsDraft, upiId: e.target.value })
                          }
                          className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Branch Addresses & Passcode */}
                  <div className="space-y-6">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-4">
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <MapPin size={18} className="text-indigo-400" />
                        <span>Branch Locations &amp; Operating Hours</span>
                      </h3>

                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1">
                            Head Office Address
                          </label>
                          <textarea
                            rows={2}
                            value={settingsDraft.addressHeadOffice}
                            onChange={(e) =>
                              setSettingsDraft({
                                ...settingsDraft,
                                addressHeadOffice: e.target.value,
                              })
                            }
                            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1">
                            Airport Branch Address
                          </label>
                          <textarea
                            rows={2}
                            value={settingsDraft.addressAirport}
                            onChange={(e) =>
                              setSettingsDraft({
                                ...settingsDraft,
                                addressAirport: e.target.value,
                              })
                            }
                            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1">
                            Admin Security Passkey
                          </label>
                          <input
                            type="text"
                            value={settingsDraft.adminPasscode}
                            onChange={(e) =>
                              setSettingsDraft({
                                ...settingsDraft,
                                adminPasscode: e.target.value,
                              })
                            }
                            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Backup & Disaster Recovery */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-4">
                  <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                    <Download size={18} className="text-blue-400" />
                    <span>Data Backup, Export &amp; Factory Reset</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Export all your fleet modifications, custom destinations, packages, fare matrix, and booking records into a portable JSON backup.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleExportBackup}
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition cursor-pointer"
                    >
                      <Download size={16} />
                      <span>Download JSON Backup</span>
                    </button>

                    <label className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-200 transition cursor-pointer">
                      <Upload size={16} />
                      <span>Restore Backup File</span>
                      <input
                        type="file"
                        accept=".json"
                        onChange={handleImportBackup}
                        className="hidden"
                      />
                    </label>

                    <button
                      type="button"
                      onClick={handleFactoryReset}
                      className="inline-flex items-center gap-2 rounded-xl bg-rose-950/70 border border-rose-800/80 hover:bg-rose-900 text-rose-300 hover:text-white px-4 py-2.5 text-xs sm:text-sm font-bold transition cursor-pointer ml-auto"
                    >
                      <RefreshCw size={16} />
                      <span>Reset to Defaults</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </main>
      </div>

      {/* =====================================================================
          MODAL: ADD / EDIT VEHICLE
      ====================================================================== */}
      {vehicleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
            <button
              type="button"
              onClick={() => setVehicleModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
              {editingVehicle ? "Edit Fleet Vehicle" : "Add New Vehicle"}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Configure car name, category, fuel type, seating specs, and per-KM rate.
            </p>

            <form onSubmit={handleSaveVehicle} className="space-y-4 max-h-[75vh] overflow-y-auto pr-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Vehicle Model / Name *
                  </label>
                  <input
                    type="text"
                    value={vehicleForm.name || ""}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, name: e.target.value })}
                    placeholder="e.g. Swift Dzire, Innova Crysta"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Category Name
                  </label>
                  <input
                    type="text"
                    value={vehicleForm.categoryName || ""}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, categoryName: e.target.value })}
                    placeholder="e.g. Sedan Class, Executive MPV"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Rate Per KM (₹) *
                  </label>
                  <input
                    type="number"
                    value={vehicleForm.ratePerKm || 12}
                    onChange={(e) =>
                      setVehicleForm({
                        ...vehicleForm,
                        ratePerKm: Number(e.target.value) || 12,
                        price: `₹${Number(e.target.value) || 12}/km`,
                      })
                    }
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-emerald-400 font-bold focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Passenger Seats
                  </label>
                  <input
                    type="text"
                    value={vehicleForm.seats || ""}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, seats: e.target.value })}
                    placeholder="e.g. 4 Seats, 7 Seats"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Luggage Capacity
                  </label>
                  <input
                    type="text"
                    value={vehicleForm.luggage || ""}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, luggage: e.target.value })}
                    placeholder="e.g. 2 Bags, 4 Bags"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    AC Type
                  </label>
                  <input
                    type="text"
                    value={vehicleForm.ac || ""}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, ac: e.target.value })}
                    placeholder="e.g. Chilled AC, Climate Control"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Fuel Type
                  </label>
                  <input
                    type="text"
                    value={vehicleForm.fuelType || ""}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, fuelType: e.target.value })}
                    placeholder="e.g. CNG / Petrol, Diesel"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Tag / Badge
                  </label>
                  <input
                    type="text"
                    value={vehicleForm.tag || ""}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, tag: e.target.value })}
                    placeholder="e.g. Economical, Most Popular"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Vehicle Image Preset or Custom URL */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Vehicle Image URL / Preset Selection
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <select
                    onChange={(e) => {
                      if (e.target.value) {
                        setVehicleForm({ ...vehicleForm, image: e.target.value });
                      }
                    }}
                    className="rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Choose preset photo...</option>
                    {PRESET_IMAGES.map((preset) => (
                      <option key={preset.url} value={preset.url}>
                        {preset.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={vehicleForm.image || ""}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, image: e.target.value })}
                    placeholder="or enter custom image URL"
                    className="flex-1 rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Best Suited For
                </label>
                <input
                  type="text"
                  value={vehicleForm.bestFor || ""}
                  onChange={(e) => setVehicleForm({ ...vehicleForm, bestFor: e.target.value })}
                  placeholder="e.g. Couples, Small Families (Up to 4 Pax)"
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Seating Comfort Layout
                  </label>
                  <textarea
                    rows={2}
                    value={vehicleForm.seatingDetails || ""}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, seatingDetails: e.target.value })}
                    placeholder="Seating details..."
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Luggage Space Details
                  </label>
                  <textarea
                    rows={2}
                    value={vehicleForm.luggageDetails || ""}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, luggageDetails: e.target.value })}
                    placeholder="Luggage boot capacity..."
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Amenities &amp; Features (Comma separated)
                </label>
                <input
                  type="text"
                  value={vehicleForm.amenities?.join(", ") || ""}
                  onChange={(e) =>
                    setVehicleForm({
                      ...vehicleForm,
                      amenities: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                    })
                  }
                  placeholder="Chilled AC, Fast USB Charging, Clean Cabin, GPS Safety"
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-300">
                  <input
                    type="checkbox"
                    checked={vehicleForm.isActive ?? true}
                    onChange={(e) => setVehicleForm({ ...vehicleForm, isActive: e.target.checked })}
                    className="rounded bg-slate-950 border-slate-700 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Display on website &amp; booking selector</span>
                </label>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setVehicleModalOpen(false)}
                    className="px-4 py-2 rounded-xl border border-slate-700 text-xs font-bold text-slate-300 hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white shadow-md cursor-pointer"
                  >
                    {editingVehicle ? "Save Vehicle" : "Add Vehicle"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL: ADD / EDIT DESTINATION
      ====================================================================== */}
      {destModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
            <button
              type="button"
              onClick={() => setDestModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-black text-white mb-1">
              {editingDest ? "Edit Destination" : "Add New Route"}
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Configure city name, travel distance from Lucknow, and tourist spots.
            </p>

            <form onSubmit={handleSaveDestination} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Destination Name *
                  </label>
                  <input
                    type="text"
                    value={destForm.name || ""}
                    onChange={(e) => setDestForm({ ...destForm, name: e.target.value })}
                    placeholder="e.g. Ayodhya, Varanasi, Nainital"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Distance (KM) *
                  </label>
                  <input
                    type="number"
                    value={destForm.distanceKm || 100}
                    onChange={(e) =>
                      setDestForm({
                        ...destForm,
                        distanceKm: Number(e.target.value) || 100,
                        distance: `${Number(e.target.value) || 100} KM from Lucknow`,
                      })
                    }
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-indigo-400 font-bold focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Description / Heritage Overview
                </label>
                <textarea
                  rows={2}
                  value={destForm.desc || ""}
                  onChange={(e) => setDestForm({ ...destForm, desc: e.target.value })}
                  placeholder="Key details about the route..."
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Starting Rate Label
                  </label>
                  <input
                    type="text"
                    value={destForm.startingRate || ""}
                    onChange={(e) => setDestForm({ ...destForm, startingRate: e.target.value })}
                    placeholder="e.g. Starting ₹3,240 One-Way"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Tag / Badge
                  </label>
                  <input
                    type="text"
                    value={destForm.tag || ""}
                    onChange={(e) => setDestForm({ ...destForm, tag: e.target.value })}
                    placeholder="e.g. Top Spiritual, Hill Station"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Popular Sightseeing Spots (Comma separated)
                </label>
                <input
                  type="text"
                  value={destForm.popularSpots?.join(", ") || ""}
                  onChange={(e) =>
                    setDestForm({
                      ...destForm,
                      popularSpots: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                    })
                  }
                  placeholder="e.g. Ram Janmabhoomi, Hanuman Garhi, Saryu Ghat"
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-300">
                  <input
                    type="checkbox"
                    checked={destForm.isFeatured ?? true}
                    onChange={(e) => setDestForm({ ...destForm, isFeatured: e.target.checked })}
                    className="rounded bg-slate-950 border-slate-700 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Feature on homepage</span>
                </label>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setDestModalOpen(false)}
                    className="px-4 py-2 rounded-xl border border-slate-700 text-xs font-bold text-slate-300 hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white shadow-md cursor-pointer"
                  >
                    {editingDest ? "Save Destination" : "Add Destination"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL: ADD / EDIT TOUR PACKAGE
      ====================================================================== */}
      {pkgModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
            <button
              type="button"
              onClick={() => setPkgModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-black text-white mb-1">
              {editingPkg ? "Edit Tour Package" : "Add Tour Package"}
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Set package duration, highlights, and car tier pricing.
            </p>

            <form onSubmit={handleSavePackage} className="space-y-4 max-h-[75vh] overflow-y-auto pr-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Package Title *
                  </label>
                  <input
                    type="text"
                    value={pkgForm.name || ""}
                    onChange={(e) => setPkgForm({ ...pkgForm, name: e.target.value })}
                    placeholder="e.g. Lucknow to Ayodhya Ram Mandir"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={pkgForm.subtitle || ""}
                    onChange={(e) => setPkgForm({ ...pkgForm, subtitle: e.target.value })}
                    placeholder="e.g. Same-Day Sacred Pilgrimage Tour"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={pkgForm.duration || ""}
                    onChange={(e) => setPkgForm({ ...pkgForm, duration: e.target.value })}
                    placeholder="e.g. 12 Hours, 3 Days / 2 Nights"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Distance Included
                  </label>
                  <input
                    type="text"
                    value={pkgForm.distance || ""}
                    onChange={(e) => setPkgForm({ ...pkgForm, distance: e.target.value })}
                    placeholder="e.g. 360 KM Round Trip"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Badge
                  </label>
                  <input
                    type="text"
                    value={pkgForm.badge || ""}
                    onChange={(e) => setPkgForm({ ...pkgForm, badge: e.target.value })}
                    placeholder="e.g. Top Spiritual Tour"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Highlights (One per line)
                </label>
                <textarea
                  rows={3}
                  value={pkgForm.highlights?.join("\n") || ""}
                  onChange={(e) =>
                    setPkgForm({
                      ...pkgForm,
                      highlights: e.target.value.split("\n").filter((s) => s.trim()),
                    })
                  }
                  placeholder="Shri Ram Janmabhoomi Darshan&#10;Hanuman Garhi & Kanak Bhawan&#10;Saryu Evening Aarti"
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Package Tier Prices */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  Package Pricing by Car Type
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 block mb-1">Sedan (₹)</label>
                    <input
                      type="number"
                      value={pkgForm.prices?.sedan?.discount || 3500}
                      onChange={(e) =>
                        setPkgForm({
                          ...pkgForm,
                          prices: {
                            ...pkgForm.prices!,
                            sedan: { original: Number(e.target.value) * 1.2, discount: Number(e.target.value) },
                          },
                        })
                      }
                      className="w-full rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-1 text-xs text-emerald-400 font-bold"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-400 block mb-1">Ertiga (₹)</label>
                    <input
                      type="number"
                      value={pkgForm.prices?.ertiga?.discount || 4500}
                      onChange={(e) =>
                        setPkgForm({
                          ...pkgForm,
                          prices: {
                            ...pkgForm.prices!,
                            ertiga: { original: Number(e.target.value) * 1.2, discount: Number(e.target.value) },
                          },
                        })
                      }
                      className="w-full rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-1 text-xs text-emerald-400 font-bold"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-400 block mb-1">Innova Crysta (₹)</label>
                    <input
                      type="number"
                      value={pkgForm.prices?.innovaCrysta?.discount || 6500}
                      onChange={(e) =>
                        setPkgForm({
                          ...pkgForm,
                          prices: {
                            ...pkgForm.prices!,
                            innovaCrysta: { original: Number(e.target.value) * 1.2, discount: Number(e.target.value) },
                          },
                        })
                      }
                      className="w-full rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-1 text-xs text-emerald-400 font-bold"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-400 block mb-1">Tempo Traveller (₹)</label>
                    <input
                      type="number"
                      value={pkgForm.prices?.tempoTraveller?.discount || 11000}
                      onChange={(e) =>
                        setPkgForm({
                          ...pkgForm,
                          prices: {
                            ...pkgForm.prices!,
                            tempoTraveller: { original: Number(e.target.value) * 1.2, discount: Number(e.target.value) },
                          },
                        })
                      }
                      className="w-full rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-1 text-xs text-emerald-400 font-bold"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setPkgModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-700 text-xs font-bold text-slate-300 hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-white shadow-md cursor-pointer"
                >
                  {editingPkg ? "Save Package" : "Add Package"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL: ASSIGN CHAUFFEUR / CAB
      ====================================================================== */}
      {driverModalOpen && selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setDriverModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X size={16} />
            </button>

            <h3 className="text-lg font-black text-white mb-1">
              Assign Chauffeur &amp; Vehicle
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Booking ID: <span className="text-blue-400 font-mono font-bold">#{selectedBooking.bookingId}</span> ({selectedBooking.customerName})
            </p>

            <form onSubmit={handleSaveDriverAssignment} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Chauffeur / Driver Name
                </label>
                <input
                  type="text"
                  value={driverForm.driverName}
                  onChange={(e) => setDriverForm({ ...driverForm, driverName: e.target.value })}
                  placeholder="e.g. Suresh Kumar"
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Chauffeur Mobile Number
                </label>
                <input
                  type="text"
                  value={driverForm.driverPhone}
                  onChange={(e) => setDriverForm({ ...driverForm, driverPhone: e.target.value })}
                  placeholder="+91 99364 08109"
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Cab Registration Number
                </label>
                <input
                  type="text"
                  value={driverForm.vehicleNumber}
                  onChange={(e) => setDriverForm({ ...driverForm, vehicleNumber: e.target.value })}
                  placeholder="e.g. UP 32 BK 4521"
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setDriverModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-700 text-xs font-bold text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white shadow-md cursor-pointer"
                >
                  Assign &amp; Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL: PAYMENT STATUS UPDATER
      ====================================================================== */}
      {paymentModalOpen && selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setPaymentModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X size={16} />
            </button>

            <h3 className="text-lg font-black text-white mb-1">
              Update Payment Milestone
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Booking Total: <span className="text-emerald-400 font-bold">₹{selectedBooking.totalFare}</span>
            </p>

            <form onSubmit={handleSavePaymentUpdate} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Payment Status
                </label>
                <select
                  value={paymentForm.paymentStatus}
                  onChange={(e) =>
                    setPaymentForm({ ...paymentForm, paymentStatus: e.target.value as any })
                  }
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="PENDING">PENDING (Unpaid)</option>
                  <option value="ADVANCE_PAID">ADVANCE_PAID (20% Collected)</option>
                  <option value="PAID">PAID (100% Fully Settled)</option>
                  <option value="PAY_AFTER_TRIP">PAY_AFTER_TRIP (Cash / UPI to Chauffeur)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Amount Collected So Far (₹)
                </label>
                <input
                  type="number"
                  value={paymentForm.paidAmount}
                  onChange={(e) =>
                    setPaymentForm({ ...paymentForm, paidAmount: Number(e.target.value) || 0 })
                  }
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-xs sm:text-sm text-emerald-400 font-bold focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setPaymentModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-700 text-xs font-bold text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow-md cursor-pointer"
                >
                  Update Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL: MANUAL TRIP BOOKING (OFFLINE / PHONE)
      ====================================================================== */}
      {manualBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
            <button
              type="button"
              onClick={() => setManualBookingModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-black text-white mb-1">
              Create Manual Trip Booking
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Log phone call, walk-in, or VIP manual bookings directly into the CRM.
            </p>

            <form onSubmit={handleCreateManualBooking} className="space-y-4 max-h-[75vh] overflow-y-auto pr-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Customer Name *</label>
                  <input
                    type="text"
                    value={manualBookingForm.customerName || ""}
                    onChange={(e) => setManualBookingForm({ ...manualBookingForm, customerName: e.target.value })}
                    placeholder="Customer Name"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Contact Phone *</label>
                  <input
                    type="text"
                    value={manualBookingForm.phone || ""}
                    onChange={(e) => setManualBookingForm({ ...manualBookingForm, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Pickup Location</label>
                  <input
                    type="text"
                    value={manualBookingForm.pickup || ""}
                    onChange={(e) => setManualBookingForm({ ...manualBookingForm, pickup: e.target.value })}
                    placeholder="e.g. Alambagh, Lucknow"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Drop / Destination</label>
                  <input
                    type="text"
                    value={manualBookingForm.drop || ""}
                    onChange={(e) => setManualBookingForm({ ...manualBookingForm, drop: e.target.value })}
                    placeholder="e.g. Ayodhya Ram Mandir"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Travel Date</label>
                  <input
                    type="date"
                    value={manualBookingForm.travelDate || ""}
                    onChange={(e) => setManualBookingForm({ ...manualBookingForm, travelDate: e.target.value })}
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Travel Time</label>
                  <input
                    type="text"
                    value={manualBookingForm.travelTime || ""}
                    onChange={(e) => setManualBookingForm({ ...manualBookingForm, travelTime: e.target.value })}
                    placeholder="07:00 AM"
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Service Type</label>
                  <select
                    value={manualBookingForm.serviceType}
                    onChange={(e) => setManualBookingForm({ ...manualBookingForm, serviceType: e.target.value })}
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-white"
                  >
                    <option value="One Way">One Way</option>
                    <option value="Round Trip">Round Trip</option>
                    <option value="Airport Transfer">Airport Transfer</option>
                    <option value="Local Rental">Local Rental (8hr/80km)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Vehicle</label>
                  <select
                    value={manualBookingForm.vehicle}
                    onChange={(e) => setManualBookingForm({ ...manualBookingForm, vehicle: e.target.value })}
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-white"
                  >
                    {vehicles.map((v) => (
                      <option key={v.id} value={v.name}>
                        {v.name} (₹{v.ratePerKm}/km)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Total Fare (₹)</label>
                  <input
                    type="number"
                    value={manualBookingForm.totalFare || 0}
                    onChange={(e) =>
                      setManualBookingForm({ ...manualBookingForm, totalFare: Number(e.target.value) || 0 })
                    }
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-emerald-400 font-bold"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Payment Status</label>
                  <select
                    value={manualBookingForm.paymentStatus}
                    onChange={(e) => setManualBookingForm({ ...manualBookingForm, paymentStatus: e.target.value as any })}
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-white"
                  >
                    <option value="PENDING">Pending (Pay After Trip)</option>
                    <option value="ADVANCE_PAID">Advance Paid</option>
                    <option value="PAID">Fully Paid</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Special Notes / Requests</label>
                <textarea
                  rows={2}
                  value={manualBookingForm.specialNote || ""}
                  onChange={(e) => setManualBookingForm({ ...manualBookingForm, specialNote: e.target.value })}
                  placeholder="e.g. AC always on, senior citizen onboard, flight terminal 3..."
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setManualBookingModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-700 text-xs font-bold text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow-md cursor-pointer"
                >
                  Save Manual Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL: FULL INVOICE / BOOKING RECEIPT
      ====================================================================== */}
      {invoiceModalOpen && selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 text-slate-100">
            <button
              type="button"
              onClick={() => setInvoiceModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>

            {/* Receipt Header */}
            <div className="border-b border-slate-800 pb-4 mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">
                Kuldeep Travels • Official Booking Voucher
              </span>
              <h3 className="text-xl font-black text-white mt-0.5">
                Booking #{selectedBooking.bookingId}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Generated on {new Date(selectedBooking.createdAt).toLocaleString("en-IN")}
              </p>
            </div>

            {/* Trip Details Grid */}
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Customer</span>
                  <p className="font-bold text-white text-sm">{selectedBooking.customerName}</p>
                  <p className="text-slate-400">{selectedBooking.phone}</p>
                  {selectedBooking.email && <p className="text-slate-400">{selectedBooking.email}</p>}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Trip Timing</span>
                  <p className="font-bold text-white text-sm">{selectedBooking.travelDate}</p>
                  <p className="text-slate-400">{selectedBooking.travelTime}</p>
                  <p className="text-slate-400">{selectedBooking.passengers} Passenger(s)</p>
                </div>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 space-y-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Route &amp; Service</span>
                  <p className="font-extrabold text-white text-sm mt-0.5">
                    {selectedBooking.pickup} → {selectedBooking.drop}
                  </p>
                  <p className="text-blue-400 font-semibold mt-0.5">
                    {selectedBooking.serviceType} • {selectedBooking.vehicle}
                  </p>
                </div>
              </div>

              {/* Chauffeur info if assigned */}
              {selectedBooking.driverName && (
                <div className="bg-blue-950/40 p-3.5 rounded-2xl border border-blue-800/60">
                  <span className="text-[10px] uppercase font-bold text-blue-300 block">
                    Assigned Chauffeur &amp; Cab
                  </span>
                  <p className="font-bold text-white text-sm mt-0.5">
                    {selectedBooking.driverName} ({selectedBooking.driverPhone})
                  </p>
                  <p className="text-blue-200 font-mono font-bold mt-0.5">
                    Cab No: {selectedBooking.vehicleNumber}
                  </p>
                </div>
              )}

              {/* Fare breakdown */}
              <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>Estimated Total Fare</span>
                  <span className="font-bold text-white">₹{selectedBooking.totalFare}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Paid Token Amount</span>
                  <span className="font-bold text-emerald-400">₹{selectedBooking.paidAmount || 0}</span>
                </div>
                <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800">
                  <span className="font-bold text-white">Balance Due</span>
                  <span className="font-black text-amber-400 text-sm">
                    ₹{selectedBooking.remainingAmount || selectedBooking.totalFare}
                  </span>
                </div>
              </div>

              {selectedBooking.specialNote && (
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Special Note</span>
                  <p className="text-slate-300 mt-0.5 italic">&ldquo;{selectedBooking.specialNote}&rdquo;</p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <a
                href={`https://wa.me/${selectedBooking.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `*Kuldeep Travels - Trip Confirmation Voucher*\n\nBooking ID: #${selectedBooking.bookingId}\nCustomer: ${selectedBooking.customerName}\nRoute: ${selectedBooking.pickup} to ${selectedBooking.drop}\nDate & Time: ${selectedBooking.travelDate} at ${selectedBooking.travelTime}\nVehicle: ${selectedBooking.vehicle}\nTotal Fare: ₹${selectedBooking.totalFare}\nStatus: ${selectedBooking.bookingStatus}\n\nFor 24x7 support call +91 99364 08109.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow"
              >
                <MessageCircle size={14} />
                <span>Send WhatsApp Receipt</span>
              </a>

              <button
                type="button"
                onClick={() => setInvoiceModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-slate-700 text-xs font-bold text-slate-300 hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
